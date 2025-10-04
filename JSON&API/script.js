let body = document.querySelector(".body");
let searchBar = document.querySelector(".searchBar");
let cityName = document.querySelector("#cityName");
let button = document.querySelector(".submitBtn");
let anotherCityBtn = document.querySelector(".anotherCity");

let weatherDetails = document.querySelector(".weatherDetails");
let cityLocation = document.querySelector(".cityLoc");
let tempValues = document.querySelector(".tempValues");
let feelsLike = document.querySelector(".feelsLike");
let tempFeelsLike = document.querySelector(".tempFeelsLike");
let lastUpdatedAt = document.querySelector(".lastUpdatedAt");

async function fetchData(place) {
  let response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=42d1b2d305bc44fcb1474238250410&q=${place}&aqi=yes`
  );
  let status = response.status;
  let weatherData = await response.json();

  if(status === 400) {
    alert("Enter a valid city name");
    cityName.value = "";
    return;
  }

  searchBar.style.display = "none";
  weatherDetails.style.display = "flex";
  cityLocation.innerText = weatherData.location.name;
  tempValues.innerHTML = `${weatherData.current.temp_c}&deg;C ${weatherData.current.temp_f}&deg;F`;
  feelsLike.innerText = weatherData.current.condition.text;
  tempFeelsLike.innerHTML = ` ${weatherData.current.feelslike_c}&deg;C ${weatherData.current.feelslike_f}&deg;F`;
  let localDate = new Date(weatherData.current.last_updated);
  lastUpdatedAt.innerText = localDate.toUTCString();
}

button.addEventListener("click", () => {
  let place = cityName.value.toLowerCase();
  if (place === "") {
    alert("city is empty");
    return;
  }
  fetchData(place);
});

anotherCityBtn.addEventListener("click", () => {
  searchBar.style.display = "flex";
  weatherDetails.style.display = "none";
  cityName.value = "";
});
