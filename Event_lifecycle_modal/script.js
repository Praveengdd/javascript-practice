let modalButton = document.querySelector(".modal-btn");
let modalContainer = document.querySelector(".modalContainer");

modalButton.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});


modalContainer.addEventListener("click", (event) => {
  if(event.target.className === "modalContainer") {
    modalContainer.style.display = "none";
  }
});
