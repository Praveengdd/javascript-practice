// basic

// function myFunction(n) {
//     let sum = 0;
//     for(let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }

// myFunction(10);
// myFunction(15);
// myFunction(150);

// function greetName(name="Guest") {
//     console.log(`Hello ${name}`);
// }

// greetName("Praveen");
// greetName("Naveen");
// greetName();

//Normal Function

// function greetName(name = "Guest") {
//   console.log(`Hello ${name}`);
// }

// greetName("Praveen");
// greetName();

//Function Expression

// let greetName2 = function(name="Guest") {
//     console.log(`Hi ${name}`);
// }

// greetName2("Praveen");
// greetName2();

//Arrow function

// let greetName = (a, b) => {
//     return a + b;
// }

// console.log(greetName(5, 4));
// console.log(greetName(2, 3));

//Anonymous Function => a function which does not have name and will mostly be used as argument for anonymous function
// Higher order function is a function which takes another function as argument/parameter

// setTimeout(function() {
//     console.log("This message will appear after 3 seconds")
// }, 3000);

//IIFE => Immediately Invoked Function Expression
// (function () {
//   console.log("hello");
// })();


//Practice questions

//regular function that takes a string and returns first character of the string capitalized

// function capitalize(string="guest") {
//     console.log(string.charAt(0).toUpperCase() + string.slice(1));
// }

// capitalize();
// capitalize("praveen");

//function that alerts the user to login after 5 seconds

// setTimeout(function() {
//     alert("Please login!!!!")
// }, 5000);

//Fat Arrow function that takes price and discount and returns price after discount is applied

// const discountPrice = (price, discount) => {
//     return price - (price * (discount/100));
// }

// console.log(discountPrice(500, 10));
// console.log(discountPrice(1000, 20));


// function giveDirections(color) {
//     if(color === "red") {
//         console.log("Stop");
//     }
//     else if(color === "orange") {
//         console.log("Get Reaady");
//     }
//     else if(color === "green") {
//         console.log("Proceed");
//     }
//     else {
//         console.log("Invalid color");
//     }
// }

// giveDirections("Blue");
// giveDirections("red");
// giveDirections("orange");
// giveDirections("green");

