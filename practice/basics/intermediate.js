// let Decimal = require("decimal.js");

// let num1 = Decimal(0.1);
// let num2 = Decimal(0.2);

// console.log(Number(num1.plus(num2)) === 0.3);

// let arr = [1, 2, 3, 4]
// arr.splice(2, 0, 2.25, 2.5, 2.75);
// console.log(arr);

// let arr2 = [1, 2, 3, 4];

// console.log(arr2.slice(1, 4));
// console.log(arr2);

// question 1

// let string = "Praveen is a good boy";
// let stringArray = string.split(" ");
// console.log(stringArray);

// reversedStringArray = stringArray.map(elem => {
//     let revString = "";
//     for(let i = elem.length - 1; i >= 0; i--) {
//         revString += elem[i];
//     }
//     return revString;
// })

// console.log(reversedStringArray.join(" "));

// Question 2

// let arr = [1, 2, "praveen", 4, 5, "g", "d", "Kumar", 3, "33", "8"];

// let numberArr = arr.filter(elem => {
//     return typeof elem !== "string";
// })

// console.log(numberArr);

// let num = 123;

// console.log(num % 1 === 0);

//Question 3

// function revNum(number) {
//     let revNum = 0;
//     while(number !== 0) {
//         revNum = (revNum * 10) + (number % 10);
//         number = Number.parseInt(number / 10);
//     }
//     return revNum;
// }

// console.log(revNum(123456));

//Question 4
// function returnSortLetters(string) {
//   return string.split(" ").sort().join(" ");
// }

// console.log(returnSortLetters("praveen is a good boy"));

//Question 5

// function titlify(string) {
//   let titleArray = string.split(" ").map((elem) => {
//     return elem[0].toUpperCase() + elem.slice(1);
//   });

//   return titleArray.join(" ");
// }

// console.log(titlify("praveen kumar G D is a good boy"));

//Question 6

// let arr = [1, 2, 3, 4, 5, 6];

// function returnNElements(arr, n=0) {
//     if(n === 0) {
//         return arr[0];
//     }
//     else{
//         return arr.slice(0, n);
//     }
// }

// console.log(returnNElements(arr, 10));


//Question 7

// let string = "praveen is a good boy";

// function countOccurences(string) {
//     let obj = {};
//     for(let char of string) {
//         if(obj.hasOwnProperty(char)) {
//             obj[char] += 1;
//         }
//         else {
//             obj[char] = 1;
//         }
//     }
//     let values = Object.values(obj);
//     let maxValue = Math.max(...values);
//     console.log(maxValue);
//     let mostFrequent = [];
//     for(let key in obj) {
//         if(obj[key] === maxValue) {
//             mostFrequent.push(key);
//         }
//     }

//     return mostFrequent;
// }

// console.log(countOccurences(string));


//Question 8

let arr = [1, 2, 3, 4, 5];

function shuffleArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        let randIndex = Math.floor(Math.random() * arr.length)
        arr[i] = arr[randIndex]
        arr[randIndex] = elem;
    }
}

shuffleArray(arr);
console.log(arr);