let taskContainer = document.querySelector(".taskContainer");
let addButton = document.querySelector("#addButton");
let inputElement = document.querySelector("#inputTask");
let cancelButton = document.querySelector(".cancelButton");

const addButtonHandler = (event) => {
  event.preventDefault();
  if (inputElement.value === "") {
    alert("Entered an empty task");
    return;
  }

  let taskItem = document.createElement("div");
  taskItem.className = "taskItem";
  taskItem.innerHTML = `
    <p><span class="taskText">${inputElement.value}</span></p>
        <button class="cancelButton">❌</button>
            `;

  taskContainer.prepend(taskItem);
  inputElement.value = "";
};

const cancelButtonHandler = (event) => {
  event.preventDefault();
  if(event.target.matches(".cancelButton")) {
    let cancelButton = event.target;
    let taskItem = cancelButton.parentNode;
    taskContainer.removeChild(taskItem);
  }
};

addButton.addEventListener("click", addButtonHandler);
document.addEventListener("click", cancelButtonHandler);
