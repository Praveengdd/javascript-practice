//Question 1

// function lastElement(arr) {
//     return arr[arr.length - 1];
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(lastElement(arr));
// console.log(lastElement(["praveen", "kumar", "d", "g"]))

//question 2

// function arrCombination(arr1, arr2) {
//     let combinedArr;

//     combinedArr = arr1.concat(arr2);

//     return combinedArr;

// }

// let arr1 = [1, 2, 3, 4 ,5];
// let arr2 = [4, 5, 6, 7, 8, 9];

// let newArr = arrCombination(arr1, arr2);
// console.log(newArr, arrCombination([1, 2, 3], ["praveeen", "kumar", "d", "g"]))

// newArr = [...[5, 8, 9], ...[4, 9, 1]];
// console.log(newArr);

//question 3

// function generateRandomNumber() {
//     let randInt;
//     randInt = Math.floor(Math.random() * 19);
//     return randInt;
// }

// for(let i = 0; i < 50; i++) {
//     console.log(generateRandomNumber());
// }

//question 4

// let arr = [1, 2, "spandana", 3, 4, 5, 'm', "sagar"];

// function stringArray(arr) {
//     let stringArray = arr.filter((elem) => {
//         return typeof elem === "string";
//     })

//     return stringArray;
// }

// console.log(stringArray(arr));

//question 5

// let arr = [1, 2, 99, 3, 4, 5, 6];

// function returnMax(arr) {
//     let maxValue = -Infinity;

//     for (let element of arr) {
//         if(element > maxValue) {
//             maxValue = element;
//         }
//     }

//     return maxValue;
// }

// console.log(returnMax(arr));

//question 6

// let obj = {name:"praveen", age: 17, location:"mandya", profession: "student"};

// console.log(Object.keys(obj).length);

//question 7

// let arr = [
//     {name: "Praveen", gender: "male"},
//     {name: "Prameela", gender: "female"},
//     {name: "Ashutosh", gender: "male"},
//     {name: "Asuka", gender: "female"},
//     {name: "Niharesh", gender: "male"}
// ]

// function maleObjects(arr) {
//     let maleObjectArr = arr.filter((elem) => {
//         return elem["gender"] === "male";
//     })

//     return maleObjectArr;
// }

// console.log(maleObjects(arr));

//question 8

// let arr = ["praveen", "Kumar", "G d", "is", "A", "GOod", "boy"];

// let newArr = arr.map((elem) => {
//     return elem.toUpperCase()
// })

// console.log(newArr);

//question 9

// let obj = {};

// console.log(Object.keys(obj).length === 0);

//question 10

// let arr = [7, 9, 9, 19, 23, 2, 4, 19];

// let newArr = arr.map((elem) => {
//     return elem * 2;
// })

// console.log(arr);
// console.log(newArr);

//question 11

// let arrayOfStrings = ["Praveen", "Kumar", "G", "D", "is", "a", "very", "good", "boy"];

// console.log(arrayOfStrings.join(","))

//question 12

// let arr = [1, 2, 3, [4, 5], [5, [6, 7, [8, 9]]], 2];

// console.log(arr.flat(1));

//question 13

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = ["praveen", 1, 2, 3];

// function allElemNumbers(arr) {
//     for(let elem of arr) {
//         if(typeof elem !== "number") return false;
//     }
//     return true;
// }

// console.log(allElemNumbers(arr1));
// console.log(allElemNumbers(arr2));

//Question 14

// function isPrime(number) {
//     for(let i = 2; i < number; i++) {
//         if(number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isPrime(17));
// console.log(isPrime(21));

//Question 15

// function removeDuplicates(arr) {
//   let uniqueArr = [];
//   for (let elem of arr) {
//     if (!isPresent(uniqueArr, elem)) {
//       uniqueArr.push(elem);
//     }
//   }

//   return uniqueArr;
// }

// function isPresent(arr, elem) {
//   for (let item of arr) {
//     if (item === elem) {
//       return true;
//     }
//   }

//   return false;
// }

// let arr = ["praveen", "praveen", "kumar", "Kumar", "g", "g", "g", "d"];

// console.log(removeDuplicates(arr));
