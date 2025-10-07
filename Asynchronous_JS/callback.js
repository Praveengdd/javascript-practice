// function higherOrderFunction(name, callBackFunc) {
//   callBackFunc(name);
// }

// function printName(name) {
//   console.log(`Hello ${name}`);
// }

// higherOrderFunction("Praveen", printName);

// function returnSum(func) {
//   return func;
// }

// function sum(a, b) {
//   return a + b;
// }

// console.log(returnSum(sum)(15, 20));

// function calculate(a, b, callback) {
//   return callback(a, b);
// }

// let sum = (a, b) => {
//   return a + b;
// };

// let sub = (a, b) => {
//   return a - b;
// };

// let mul = (a, b) => {
//   return a * b;
// };

// console.log(calculate(20, 15, sum));
// console.log(calculate(20, 15, sub));
// console.log(calculate(20, 15, mul));

// console.log("1. Fetching Data.....");

// function fetchData(processData) {
//   setTimeout(() => {
//     console.log("2. Data has been fetched Successfully!!!!!");
//     processData();
//   }, 3000);
// }

// function processData() {
//   console.log("3. Processing the fetched Data.....");
// }

// fetchData(processData);

// console.log("Some other tasks going on");
// console.log("Some other tasks going on");
// console.log("Some other tasks going on");
// console.log("Some other tasks going on");

// function getData(data, callback) {
//   setTimeout(() => {
//     console.log(data);
//     if (callback) callback();
//   }, 3000);
// }

// console.log("Fetching First Data");
// getData("1st Data", () => {
//   getData("2nd Data", () => {
//     getData("3rd Data", () => {
//       getData("4th Data");
//     });
//   });
// });

// console.log("Getting Data");
// setTimeout(() => {
//   console.log("Fetching user data from database");
//   setTimeout(() => {
//     console.log("Fetching Product data from database");
//     setTimeout(() => {
//       console.log("Final Data has been processed");
//     }, 3000);
//   }, 3000);
// }, 3000);
