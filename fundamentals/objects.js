//basics

// obj = {
//     name: "Praveen",
//     age: 22,
//     location: "Mandya",
//     employed: false
// }

// console.log(obj);

// let car = {
//   name: "Honda",
//   color: "red",
//   maxSpeed: 200,
//   stop: () => {
//     console.log("Stopping the car...");
//   },
//   start: function () {
//     console.log("Starting the car...");
//   },

//   greet: function () {
//     console.log(`Hello from ${this.name}`);
//   },
// };

// console.log(car);
// car.name = "Skoda";

// console.log(car);
// car.transmission = "DCT";

// console.log(car);

// delete car.transmission;

// console.log(car);
// car.greet();

// car.hello = function() {
//     console.log(this);
// }

// car.hello();
// console.log(this);

//object methods

// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));

// for(let key in car) {
//     console.log(key, car[key]);
// }

// let carCopy = {
//     ...car
// }

// console.log(carCopy);

// let carCopy3 = {};
// Object.assign(carCopy3, car);
// console.log(carCopy3);


// let car = {
//     name: "Skoda",
//     maxSpeed: 180,
//     transimission: "DCT",
//     color: "green"
// } 

// Object.freeze(car);

// car.name = "Honda";
// car.mileage = 12;
// delete car.transimission;

// Object.seal(car);
// car.name = "Volkswagen";
// delete car.transimission;
// car.mileage = 19;

// console.log(car.hasOwnProperty("name"));
// console.log(car.hasOwnProperty("transimission"));
// console.log(car.hasOwnProperty("mileage"))
// console.log(car);

// let {name, transimission, color} = car;
// console.log(name);
// console.log(transimission);
// console.log(color);

// let arr = [1, 2, 3, 4];

// let [,,num_1, num_2] = arr;
// console.log(num_1, num_2);

//practice

// const person = {
//     name: "Praveen",
//     age: 22, 
//     city: "Mandya"
// }

// person.email = "thong@mail.com";
// delete person.city;

// for(let key in person) {
//     console.log(`Value of ${key} is ${person[key]}`);
// } 

// let person = {
//     firstName: "Praveen",
//     middleName: "Kumar",
//     lastName: "G D"
// }

// function printFullName(person) {
//     console.log(`Your full name is: ${person.firstName} ${person.middleName} ${person.lastName}`)
// }

// printFullName(person);

// let car = {
//     name: "Skoda",
//     mileage: 20,
//     color: "green",
//     transimission: "DCT"
// }

// function countProperties(obj) {
//     propertyCount = Object.keys(obj).length;
//     return propertyCount;
// }

// console.log(countProperties(car));

// let arr = [
//     {name: "Prameela", role: "admin"},
//     {name: "Manga", role: "dancer"},
//     {name: "Dongi", role: "admin"}
// ]

// let adminCount = 0;
// arr.forEach((element) => {
//     if(element.role === "admin") {
//         console.log(element.name);
//         adminCount++;
//     }
// })

// let admins = arr.filter((element) => {
//     return element.role === "admin";
// })

// let adminNames = admins.map((elem) => {
//     return elem.name;
// })

// console.log(adminNames);

// for(let obj of admins) {
//     console.log(obj.name, obj.role);
// }

// console.log(adminCount);


// let products = [
//     {id: 1, name: "Samsung galaxy"},
//     {id: 2, name: "Apple iphone"},
//     {id: 3, name: "HCL laptop"},
//     {id: 4, name: "Samsung TV"},
//     {id: 5, name: "apple mac"},
// ]

// let search = function(product, keyword) {
//     searchedProducts = product.filter((elem) => {
//         return elem.name.toLowerCase().includes(keyword.toLowerCase());
//     })

//     return searchedProducts;
// }

// let samProd = search(products, "SamSung");
// let appleProd = search(products, "AppLE");

// console.log(samProd);
// console.log(appleProd);

//Group the comment by post


// let comments = [
//     {id: 1, comment: "very good"},
//     {id: 2, comment: "go go girl"},
//     {id: 1, comment: "insightful"},
//     {id: 1, comment: "very very good"},
//     {id: 3, comment: "nice one bro"},
//     {id: 3, comment: "what a roast bro"}
// ]

// function groupByPost(comments) {
//     let commentsList = Object.entries(comments);
//     let postComments = {};

//     for(let comment of commentsList) {
//         console.log(comment[1]);
//         if(postComments.hasOwnProperty(comment[1].id)) {
//             postComments[comment[1].id].push(comment[1]["comment"]);
//         }

//         else{
//             postComments[comment[1].id] = [comment[1]["comment"]];
//         }
//     }

//     return postComments;
// }

// console.log(groupByPost(comments));


// let params = {
//     search:"laptop",
//     page: 2,
//     sort: "price"
// }

// function buildUrl(params) {

//     let url = [];
//     let parameters = Object.entries(params);

//     parameters.forEach((elem) => {
//         url.push(`${elem[0]}=${elem[1]}`)
//     })

//     return url.join("&")
// }



// console.log(buildUrl(params));