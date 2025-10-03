//Imperative approach

// let arr = [1, 2, 3, 4 ,5];
// let double = [];

// for(let i = 0; i < arr.length; i++) {
//     double.push(arr[i] * 2);
// }

// console.log(double);

//Declarative approach

// let arr = [1, 2, 3, 4, 5];

// let double = arr.map(elem => elem * 2);
// console.log(double);

//PURE FUNCTIONS
// for fixed input produces fixed output
// It not has side effects like console.log() or alert()

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(3, 4));
// console.log(sum(3, 4));

//IMPURE FUNCTIONS

// let total = 0;
// function increment() {
//     total++;    // this func is not taking any inputs rather it is working on shared states
// }

// increment();
// console.log(total);
// increment();
// console.log(total);

//IMMUTABILITY

// let string = "Ray of Hope";
// string[4] = "O";
// console.log(string);

// MUTABILITY  objects and arrays are mutable

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr[1] = 22;
// console.log(arr);

// obj = {name:"Praveen", age: 22};
// console.log(obj);
// obj.age = 19;
// console.log(obj);

// let obj = {name: "Praveen Kumar G D", age:21};

// function replaceName(obj, name) {
//     let newObj = {...obj, name};
//     return newObj;
// }

// let newObj = replaceName(obj, "Pavan");

// console.log(obj);
// console.log(newObj);

// let veggies = ["potato", "cauliflower", "lettuce"];

// function addVegetables(veggies, vegetable) {
//     let newVeggies = [...veggies, vegetable];
//     return newVeggies;
// }

// let modifiedVeggies = addVegetables(veggies, "Orange");

// console.log(veggies);
// console.log(modifiedVeggies);

// let veggies = ["grapes", "apple", "orange"];

// function removeLastItem(arr) {
//     const newVeggies = arr.slice(0, -1);
//     return newVeggies;
// }

// console.log(removeLastItem(veggies));
// console.log(veggies);

//❌AVOID SHARED STATE - because the below total can be accessed by other functions which can give us wrong results

// let total = 0;

// function addNumber(n) {
//   total += n;
// }

// addNumber(5);
// console.log(total);
// addNumber(10);
// console.log(total);

//❌ AVOID SIDE EFFECTS

// function capitalizeFirstLetter(string) {
//   alert(string.charAt(0).toUpperCase() + string.slice(1));
// }

// string = "praveen";
// capitalizeFirstLetter(string);

//COMPOSE AND REUSE LOGIC

// let name = "Praveen Kumar G D";

// function generateUserName(name) {
//     let lowerCaseName = name.toLowerCase();
//     let truncatedName = lowerCaseName.replaceAll(" ", "");
//     let finalUserName = "@" + truncatedName;
//     console.log(finalUserName);
// }

// generateUserName(name);

// let userName = generateUserName(name);
// console.log(userName)

// let toLower = (string) => string.toLowerCase();
// let truncated = (string) => string.replaceAll(" ", "");
// let addAtTheRate = (string) => "@" + string;

// let name = "Praveen Kumar G D";

// function createUserName(name) {
//     return addAtTheRate(truncated(toLower(name)));
// }

// let username = createUserName(name);
// console.log(name);
// console.log(username);

//DONT ITERATE USING CORE LOOPS INSTEAD USE FOREACH MAP FILTER

// let arr = [1, 2, 3, 5, 8, 10];
// let evenArray = [];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0) {
//         evenArray.push(arr[i]);
//     }
// }

// console.log(evenArray);

// let arr = [4, 2, 1, 8, 7, 9];
// let evenArray = arr.filter(elem => elem % 2 === 0);
// console.log(evenArray);

// LOOSE COUPLING

// let endPoint = "www.example.com";

// function fetchData(endPoint, resource) {
//   return `${endPoint}\\${resource}`;
// }

// console.log(fetchData(endPoint, "user"));
// console.log(fetchData(endPoint, "products"));
// console.log(fetchData(endPoint, "reviews"));

// const user = {
//   name: "Praveen Kumar G D",
//   email: "fang@mail.com",
//   phone: 9847398473,
// };

// const user2 = {
//   name: "Mental Professor",
//   email: "pro@mail.com",
//   phone: 9840000073,
// };

// function sendMessage(messType, target) {
//     return `${messType} sent to: ${target}`;
// }

// console.log(sendMessage('Email', user.email));
// console.log(sendMessage('SMS', user.phone));
// console.log(sendMessage('Whatsapp message', user.phone));

// function sendEmail(user) {
//   console.log(`Email sent to: ${user.email}`);
// }

// function sendSMS(user) {
//   console.log(`SMS sent to: ${user.phone}`);
// }

// function sendWhatsapp(user) {
//   console.log(`Whatsapp message sent to: ${user.phone}`);
// }

// function sendMessage(user, notiFunc) {
//   console.log("Since you are authorized");
//   notiFunc(user);
// }

// sendMessage(user, sendEmail);
// sendMessage(user, sendSMS);
// sendMessage(user, sendWhatsapp);
// console.log();
// sendMessage(user2, sendEmail);
// sendMessage(user2, sendSMS);
// sendMessage(user2, sendWhatsapp);

//FIRST CLASS FUNCTIONS, HIGHER ORDER FUNCTIONS AND CALLBACK FUNCTIONS

// const greetHello = () => "Hello";

// const greetNamaste = () => "Namaste";

// function greetWithName(fn, name) {
//     return `${fn()} ${name}`;
// }

// console.log(greetWithName(greetHello, "Praveen"));
// console.log(greetWithName(greetNamaste, "Praveen"));

// function func() {
//     console.log("Function 1");
// }

// function HOD(callback) {
//     return callback;
// }

// let result = HOD(func);
// result();

//Questions

// let vegetables = ["Brocolli", "Bell pepper", "Carrot", "Kidney Beans", "Beetroot"];

// let container = document.querySelector(".veggie-container");

// vegetables.map(elem => {
//     let item = document.createElement("div");
//     item.className = "veggie-item";
//     item.innerText = elem;
//     container.prepend(item);
// })

// let users = [
//     {name: "Praveen",
//     age: 22,
//     location: "Mandya"
//     },
//     {name: "Pavan",
//     age: 21,
//     location: "Mysore"
//     },
//     {name: "Prameela",
//     age: 35,
//     location: "Guthallu"
//     },
// ]

// let elements = users.map(elem=> {
//     let construct = `Name: ${elem.name}\nAge: ${elem.age}\nLocation: ${elem.location}`;
//     return construct;
// })

// let body = document.querySelector("body");

// elements.forEach(elem => {
//     let div = document.createElement("div");
//     div.innerText = elem;
//     div.className = "item";
//     body.append(div);
// })

// let shoppingCart = [100, 250, 500, 750, 1100];
// let total = shoppingCart.reduce((prevValue, curValue) => {
//     return prevValue + curValue;
// })

// console.log(total);

// let add2 = (num) => num + 2;
// let multiply5 = (num) => num * 5;
// let subtract10 = (num) => num - 10;

// function compose(num, ...fns) {
//   let result = fns.reduceRight((acc, cur) => {
//     acc = cur(acc);
//     return acc;
//   }, num);
//   return result;
// }

// function compose(...fns) {
//     return function(value) {
//         return fns.reduceRight((acc, cur)=>{
//             return cur(acc);
//         }, value);
//     }
// }

// let num = 6;
// console.log(compose(subtract10, multiply5, add2)(num));

// let userInput = "       praveen kumar G D is the boss           ";

// let sanitize = string => string.trim();
// let splitt = string => string.split(" ");
// let capitalize = stringArray => {
//     return stringArray.map(elem => elem.charAt(0).toUpperCase() + elem.slice(1));
// }
// let reConstruct = stringArray => stringArray.join(" ");

// // console.log(reConstruct(capitalize(split(sanitize(userInput)))));  #CLASSICAL COMPOSE

// function compose(...fns) {
//     return function result(input) {
//         return fns.reduceRight((acc, cur) => cur(acc), input);
//     }
// }

// let cleanString = compose(reConstruct, capitalize, splitt, sanitize)(userInput);
// console.log(cleanString);

// let arr = [1, 2, 3, 4, 5];

// function squareLogic(ele) {
//     return ele * ele;
// }

// function cubeLogic(ele) {
//     return ele * ele * ele;
// }
// function diameterLogic(ele) {
//     return ele * 2;
// }

// function calculate(logicFn) {
//   let outputArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     outputArr.push(logicFn(arr[i]));
//   }
//   return outputArr;
// }

// function cube(arr) {
//   let outputArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     outputArr.push(arr[i] * arr[i] * arr[i]);
//   }
//   return outputArr;
// }

// function diameter(arr) {
//   let outputArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     outputArr.push(2 * arr[i]);
//   }
//   return outputArr;
// }

// console.log(square(arr));
// console.log(cube(arr));
// console.log(diameter(arr));

// console.log(calculate(arr, squareLogic));
// console.log(calculate(arr, cubeLogic));
// console.log(calculate(arr, diameterLogic));

// Array.prototype.calMap = calculate;

// console.log(arr.calMap(squareLogic));

// let arr = [1, 2, 3, 3, 4, 5, 10];

// let decision = arr.every((elem) => {
//     return typeof elem === "number";
// });

// console.log(decision);

// console.log(arr.find((elem) => {
//   elem === 10;
// }));



let arr = [1, 2, 3, 4, 5];


function evenLogic(ele) {
    return ele % 2 === 0;
}

function oddLogic(ele) {
    return ele % 2 !== 0;
}

function myFilter(logicFn) {
    let outputArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(logicFn(arr[i])) {
            outputArr.push(arr[i]);
        }
    }

    return outputArr;
}

Array.prototype.myFilter = myFilter;

console.log(arr.myFilter((ele) => {
    return ele % 2 === 1;
}))