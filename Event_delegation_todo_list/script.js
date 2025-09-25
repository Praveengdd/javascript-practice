let listContainer = document.querySelector(".listContainer");

listContainer.addEventListener("click", (event) => {
    if(event.target.className === "listItem") {
        event.target.style.textDecoration = "line-through";
    }
});
