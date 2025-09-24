let userContainer = document.querySelector(".userContainer");
let searchInput = document.querySelector("#searchInput");

const userArr = [
  {
    profileUrl:
      "https://models.bestmodelsagency.com/recursos/clientes/F31110A5-6133-4F2E-96A8-927FA9485371/list.jpg?v1589811317?202410081559",
    name: "Jennifer Lawerence",
    email: "jenniferlawren@exm.com",
  },
  {
    profileUrl:
      "https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/ce40fef0-082c-45ba-a2b0-bfeff74b44b3/AW5A5778.jpg",
    name: "Christiana Adams",
    email: "chritieadams@exm.com",
  },
  {
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1znphwjoeLQHFCSbiFvzJWbHLV-bh5Sh3Ug&s",
    name: "Vylette Williams",
    email: "vy1ette@exm.com",
  },
  {
    profileUrl:
      "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?cs=srgb&dl=pexels-alipazani-2836486.jpg&fm=jpg",
    name: "Monica Montez",
    email: "montez@yahoo.com",
  }
];

function renderUsers(arr) {

arr.map((obj) => {
  let { profileUrl, name, email } = obj;

  let div = document.createElement("div");
  div.className = "userItem";
  div.innerHTML = `
          <div class="image">
            <img
              src=${profileUrl}
              alt="error loading image"
            />
          </div>

          <div class="userDetails">
            <h3>${name}</h3>
            <p>${email}</p>
          </div>
        `;
  userContainer.append(div);
});

}

renderUsers(userArr); //Initial Rendering

const handleSearch = (e) => {
  let searchValue = e.target.value;
  userContainer.innerHTML = "";

  let filteredArr = userArr.filter((obj) => {
    let { name, email } = obj;
    return (
      name.toLowerCase().includes(searchValue.toLowerCase()) ||
      email.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  if(filteredArr.length === 0) {
    let error = document.createElement("div");
    error.className = "userItem";
    error.innerText = "No users available for this search";
    error.style.fontSize = "15px";
    error.style.color = "red";
    userContainer.append(error);
  }

  renderUsers(filteredArr);
};

searchInput.addEventListener("input", handleSearch);
