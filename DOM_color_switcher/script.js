let randomButton = document.querySelector(".random-btn");
let submitButton = document.querySelector(".submit-btn");
let colorInput = document.querySelector(".color-input");
let span = document.querySelector(".current-color");
let body = document.querySelector("body");

const randomColors = [
  "crimson",
  "teal",
  "orchid",
  "goldenrod",
  "cadetblue",
  "indigo",
  "tomato",
  "mediumseagreen",
  "slateblue",
  "darkorange",
  "peru",
  "firebrick",
  "dodgerblue",
  "darkviolet",
  "steelblue",
  "rosybrown",
  "springgreen",
  "chocolate",
  "lightcoral",
  "mediumorchid",
];

randomButton.addEventListener("click", ()=> {
    let randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];
    body.style.backgroundColor = randomColor;
    colorInput.value = "";
    span.innerText = `Current Color: ${randomColor}`;
})

submitButton.addEventListener("click", ()=> {
    if(colorInput.value === "") {
        alert("Enter a color value")
    }
    body.style.backgroundColor = colorInput.value;
    span.innerText = `Current Color: ${colorInput.value}`;
})