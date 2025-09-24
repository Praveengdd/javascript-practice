// let firstButton = document.querySelector(".first-btn");
// // console.log(firstButton);

// firstButton.onclick = ()=> {
//     console.log("I am the click from property");
// }

// firstButton.ondblclick = ()=> {
//     console.log("I am the double click from property");
// }

// firstButton.addEventListener("click", () => {
//     console.log("This click is from event listener");
// })

// firstButton.addEventListener("click", ()=> {
//     console.log("This log is from 2nd event listener");
// })

// let showConsole = function(event) {
//     console.log("Hello from even listener");
//     console.log(event);
// }

// firstButton.addEventListener("click", showConsole);
// firstButton.removeEventListener("click", showConsole);

// let firstButton = document.querySelector(".first-btn");
// let box = document.querySelector(".box");
// let h1 = document.querySelector("h1");

// firstButton.addEventListener("click", (event) => {
//     console.log(event);
// })

// box.addEventListener("mouseenter", ()=> {
//     console.log("Mouse entered the box");
// });

// box.addEventListener("mouseleave", ()=> {
//     console.log("Mouse left the box");
// });

// box.addEventListener("mousemove", ()=> {
//     console.log("Mouse is moving inside the box");
// });

// let name = document.querySelector(".name");
// let form = document.querySelector("form");
// let submitButton = document.querySelector(".submit-btn");

// form.addEventListener("submit", (e)=> {
//     e.preventDefault();
//     console.log("submitted form successfully");
// })

// name.addEventListener("focus", ()=> {
//     console.log("focussed successfully");
// })

// name.addEventListener("blur", ()=> {
//     console.log("Blurred successfully");
// })

// name.addEventListener("change", ()=> {
//     console.log(name.value);
// })

// box.addEventListener("touchmove", ()=> {
//     console.log("Mobile screen is getting touched");
// })

// window.addEventListener("scroll", ()=> {
//     console.log("You are scrolling");
// })

// window.addEventListener("resize", ()=> {
//     console.log("you are resizing the window");
// })

// name.addEventListener("cut", ()=> {
//     console.log("You cut something");
// })

//practice

// let counter = 0;
// let incBtn = document.querySelector(".inc");
// let decBtn = document.querySelector(".dec");
// let box = document.querySelector(".box");

// incBtn.addEventListener("click", ()=> {
//     counter++;
//     box.innerHTML = counter;
// })

// decBtn.addEventListener("click", ()=> {
//     if(counter <= 0) {
//         console.error("Cannot decrement more than 0");
//     }
//     else{
//         counter--;
//         box.innerText = counter;
//     }
// })

// let form = document.querySelector("form");
// let name = document.querySelector("#name");
// let email = document.querySelector("#email");
// let district = document.querySelector("#district");
// let submitButton = document.querySelector(".submit-btn");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (name.value === "" || email.value === "" || district.value === "") {
//     console.error("All fields are required!!!");
//   } else {
//     alert(`
//         Name: ${name.value}
//         Email: ${email.value}
//         District: ${district.value}
//         `);

//     let div = document.createElement("div");
//     div.innerHTML = `
//         <p>Name: ${name.value}</p>
//         <p>Email: ${email.value}</p>
//         <p>District: ${district.value}</p>
//         `;
//     form.after(div);
//   }
// });
