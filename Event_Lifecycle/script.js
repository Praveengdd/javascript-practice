//Event propagation

// let grandParent = document.querySelector(".grand-parent");
// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");

// console.log(grandParent, parent, child);

// grandParent.addEventListener("click", (event) => {
//   console.log("Grand Parent", event.target, event.currentTarget);
// });

// parent.addEventListener("click", (event) => {
//   console.log("Parent", event.target, event.currentTarget);
// });

// child.addEventListener("click", (event) => {
//   console.log("Child", event.target, event.currentTarget);
// });

// grandParent.addEventListener("click", () => {
//   alert("You have triggered the grandParent (Bubbling Up Phase)");
// });

// parent.addEventListener("click", () => {
//   alert("You have triggered the parent (Bubbling Up Phase)");
// });

// child.addEventListener("click", () => {
//   alert("You have triggered the child (Bubbling Up Phase)");
// });

// grandParent.addEventListener("click", (event) => {
//   console.log("Grand Parent(Capturing Phase)");
//   console.log(event.target);
//   console.log(event.currentTarget);
//   console.log(this);
// });

// parent.addEventListener("click", function (event) {
//   console.log("Parent");
//   console.log(event.target);
//   console.log(event.currentTarget);
//   console.log(this);
//   event.stopImmediatePropagation();
// });

// parent.addEventListener("click", ()=> {
//     console.log("This is another click event");
// })

// child.addEventListener("click", (event) => {
//   console.log("Child");
//   console.log(event.target);
//   console.log(event.currentTarget);
//   console.log(this);
// });



//Event Delegation


let container = document.querySelector(".container")


// container.childNodes.forEach((element) => {

//     element.addEventListener("click", ()=> {
//         console.log(element.innerText);
//     }) 
    
// });


container.addEventListener('click', (event)=> {
    
    if(event.target.classList.contains("box")) {
        console.log(event.target.innerText);
    }
})