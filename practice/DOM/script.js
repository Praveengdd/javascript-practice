let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let pwdInput = document.querySelector("#pwd");
let nameError = document.querySelector(".nameError");
let emailError = document.querySelector(".emailError");
let passwordError = document.querySelector(".passwordError");

nameInput.addEventListener("input", (event) => {
  let name = event.target.value;
  if (name.length < 3) {
    nameError.innerText = "Name must atleast be 3 characters long!!!";
  } else {
    nameError.innerText = "";
  }
});

emailInput.addEventListener("input", (event) => {
  let email = event.target.value;
  if (!email.includes("@") || !email.includes(".")) {
    emailError.innerText = "Email must contain @ and .";
  }
  else {
    emailError.innerText = "";
  }
});

pwdInput.addEventListener("input", (event) => {
  let password = event.target.value;
  if (password.length < 6) {
    passwordError.innerText = "password must atleast be 6 characters long!!!";
  } else {
    passwordError.innerText = "";
  }
});
