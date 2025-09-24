// console.log(document);
// console.dir(document);

// let a = document.querySelectorAll("div");
// console.log(a);

// let a = document.getElementsByTagName("div");
// let h2 = document.getElementById("heading-2");
// console.log(a);
// console.log(h2);

// let divByClass = document.getElementsByClassName("hi");
// console.log(divByClass);

// let a = document.querySelector("#heading-2");
// console.log(a);

// let div = document.querySelector("#fuddu");
// console.log(div, typeof div);

// console.log(div.firstChild);
// console.log(div.lastChild);
// console.log(div.children);

//Manipulation of HTML

// let heading = document.querySelector("h1");
// console.log(heading);
// console.log(heading.tagName);
// console.log(heading.firstChild.nodeName);

// heading.tagName = "p";
// console.log(heading.tagName);
// heading.nodeName = "text";
// console.log(heading.nodeName);

// console.log(heading.innerText);
// console.log(heading.textContent);

// heading.innerText = `This is the modified Heading
//  hello this`;

//  console.log(heading.innerText);
//  console.log(heading.textContent);

// heading.innerHTML = "<span> This is a new spanned heading</span>"

// console.log(heading.innerHTML);

// console.log(heading.firstChild);

// console.log(heading.textContent);
// console.log(heading.innerHTML);
// console.log(heading.tagName);
// console.log(heading.nodeName);
// console.log(heading.innerText);

// let div = document.querySelector("div");
// console.log(div);

// let paraFour = document.createElement('p')
// paraFour.innerText = "para 4";
// div.append(paraFour);

// div.after(paraFour);
// div.before(paraFour);

// div.insertAdjacentElement("afterbegin", paraFour);

// let insChild = div.children[0];
// insChild.remove();

// let selectedP = document.querySelector("#selection");
// selectedP.style.backgroundColor = "blue";
// selectedP.style.color = "yellow";
// console.log(selectedP);

// let parent = selectedP.parentNode;
// console.log(parent);

// let newPara = document.createElement("p");
// newPara.innerText = "para 4";

// parent.append(newPara);

// let newElement = document.createElement("div");
// newElement.innerText = "Hello from child div";

// parent.replaceChild(newElement, selectedP);
// parent.removeChild(newElement);

// parent.insertBefore(newElement, selectedP);

// let div = document.querySelector(".box");
// console.log(div);

// let existingClass = div.getAttribute("class");
// div.setAttribute("class", `${existingClass} random`);
// console.log(div.attributes.class.value)

// practice

// let paragraph = document.createElement("p");

// paragraph.innerText = "This is a practice paragraph creating during practice";
// // paragraph.style.backgroundColor = "red";
// // paragraph.style.color = "yellow";

// paragraph.setAttribute("style", `background-color: black; color: green;`);

// let body = document.querySelector("body");
// body.append(paragraph);

// let button = document.createElement("button");
// button.textContent = "click me";

// paragraph.prepend(button);

// let div = document.querySelector(".practice");
// console.log(div);

// let existingClass = div.getAttribute("class");
// console.log(existingClass);

// div.setAttribute("class", `${existingClass} new-class-added`);

// console.log(div.getAttribute("class"));

// let div = document.querySelector(".practice");

// function changeTagName(oldNode, newTagName) {
//     if(!(oldNode instanceof Element)) {
//         console.error("Invalid node");
//         return;
//     }
//     let newElement = document.createElement(newTagName);
//     newElement.innerHTML= oldNode.innerHTML;

//     for(let value of oldNode.attributes) {
//         newElement.setAttribute(value.nodeName, value.nodeValue);
//     }
//     console.log(newElement.attributes);
//     oldNode.replaceWith(newElement);
// }

// changeTagName(div, 'p');

// let div = document.querySelector("div")
// div.setAttribute("class", "red-bg");
// div.setAttribute('style', `background-color: green; color: black;`)

// div.style.backgroundColor = "black";
// div.style.color = "red";

// div.style.cssText = `background-color: black; color: orange;`

// console.log(div.className);

// div.className = "red-bg";

// div.classList.add("red-bg");
// div.classList.add("blue-bg");

// console.log(div.className);
// div.classList.remove("blue-bg");
// console.log(div.className);

// div.classList.toggle("blue-bg");
// console.log(div.className);
// div.classList.toggle("blue-bg");
// console.log(div.className);

// let button = document.querySelector("#btn-dark");
// body = document.querySelector("body");

// button.addEventListener("click", () => {
//   body.classList.toggle("dark-mode");
//   if (body.classList.contains("dark-mode")) {
//     button.textContent = "light mode";
//   } else {
//     button.textContent = "dark mode";
//   }
// });
