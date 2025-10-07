// let arr = [1, 2, 3, 4, 5, 6];

// let arr2 = ["praveen", "manjunath", "meenakshi", ...arr];
// console.log(arr2);

// let arr = [1, 2, 3,];
// let arr2 = arr;

// console.log(arr2);
// arr2[3] = 55;
// console.log(arr, arr2);

// arr2 = [...arr];

// console.log(arr2);
// arr2[4] = 99;
// console.log(arr, arr2);

// let arr = [1, 2, 3, [4, 5]];
// let arr2 = [...arr];

// arr2[3][0] = 99;

// console.log(arr, arr2);

// let boyNames = ["Rohan", "Tharun"];
// let girlNames = ["Shreya", "Rakshitha"];

// let allNames = [...boyNames, ...girlNames];
// console.log(allNames);

// let string = "Seperate";
// let stringArray = [...string];

// console.log(stringArray);

// function sum(a, b, c) {
//   console.log(a + b + c);
// }

// let a = 1,
//   b = 2,
//   c = 3;
// let arr = [4, 5, 6];

// sum(a, b, c);
// sum(...arr);

// let obj = {
//   name: "Praveen Kumar G D",
//   age: 22,
//   location: "Mandya",
//   isMarried: false,
// };

// let newObj = {
//   ...obj,
//   age: 21,
//   isMarried: "Not Applicable",
//   isEmployed: true,
//   collegeLocation: "Mysuru",
// };
// console.log(newObj);

// let obj1 = {
//   name: "Praveen Kumar G D",
//   age: 22,
// };

// let obj2 = {
//   location: "Mandya",
//   passion: "Coding",
//   hobbies: "Kayaking",
// };

// let mergedObj = { ...obj1, ...obj2 };

// console.log(mergedObj);

// function sum(...numbers) {
//   return numbers.reduce((prev, cur) => {
//     return prev + cur;
//   }, 0);
// }

// console.log(sum(1, 2, 3, 4, 5));

// let arr = ["praveen", "ram", "naveen", "raavan", "dk shivkumar"];

// let [mainUser, ...otherUsers] = arr;
// console.log(mainUser);
// console.log(otherUsers);

// let obj = {
//   name: "Praveen Kumar G D",
//   age: 22,
//   location: "Mandya",
//   postOffice: "Mysore",
//   isEmployed: false,
// };

// let { isEmployed, ...others } = obj;

// console.log(isEmployed);
// console.log(others);
