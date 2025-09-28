// let toggleButton = document.querySelector("button");
// let sideBar = document.querySelector(".sideBar");

// toggleButton.addEventListener("click", ()=> {
//     sideBar.classList.toggle("showSideBar");
// })


// let hideButton = document.querySelector(".hide-btn");
// let password = document.querySelector("#password");


// hideButton.addEventListener("click", ()=> {
//   if(password.type === "password") {
//     password.type = "text";
//     hideButton.innerText = "🙈";
//   }
//   else{
//     password.type = "password";
//     hideButton.innerText = "👁️";
//   }
  
// })

let nav = document.querySelector(".nav");
console.log(nav);

window.addEventListener("scroll", (e)=> {
    if(window.scrollY > 100) {
        nav.classList.add("sticky");
    }
    else {
        nav.classList.remove("sticky");
    }
})