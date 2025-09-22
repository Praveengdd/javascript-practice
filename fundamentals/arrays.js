//Basic
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let arr1 = ["praveen", "mahesh", "ramesh"];
// console.log(arr1);

// let arr3 = [
//   [1, 2, 3],
//   ["a", "b", "c"],
// ];
// console.log(arr3);

// let arr4 = new Array("Sunitha", "Punitha", 1, 2, 3);
// console.log(arr4);

// let arr = [20];
// console.log(arr)
// console.log(Array(20).fill(0));

// let arr = [1, 2, 3, 4 ,5];
// console.log(arr);
// arr[4] = 99;
// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for(let val of arr) {
//     console.log(val);
// }

// for(let ind in arr) {
//     console.log(ind);
// }

//Array Methods

// let arr = [1, 2, 3, 4, "praveen", "mandya", true];

// console.log(arr);
// console.log(arr.push(999));
// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

// console.log(arr.unshift("Starting"));
// console.log(arr);

// console.log(arr.shift());
// console.log(arr);

// console.log(arr.slice(4, 6))
// console.log(arr)

// console.log(arr.splice(0, 0, 5, 6, 7, 8));
// console.log(arr);

// let arr2 = [1, 2, 3];
// let arr3 = ["sunitha", "lalitha"];

// console.log(arr.concat(arr2, arr3));
// console.log(arr);

// let newArr = [...arr,...arr2,...arr3];
// console.log(newArr);

// let arr = ["Mango", "Litchi", "Guava"];
// fruits = arr.join(" and ");
// console.log(fruits);

// console.log(arr.includes("Mango"));
// console.log(arr.includes("Banana"));

// console.log(arr.toString());

// console.log(arr.indexOf("Mango"));
// console.log(arr.indexOf("Banana"));

// console.log(arr.reverse());
// console.log(arr);

// console.log(arr.find("Banana"));
// console.log(arr.find((item) => {return item === "Mango"}));

// let arr = [["spider", "monkey"], "Praveen", ["flat", "bottom", "steering"]];

// console.log(arr.flat());
// console.log(arr);

// let arr = [5, 4, 3, 8, 9, 2, 6, 10, 20];
// let heros = ["superman", "batman", "wanda", "black", "adam"]

// arr.sort((a, b) => {
//     return b - a;
// });
// heros.sort();
// console.log(arr);
// console.log(heros);

//Special Methods

// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.map((elem, index, arr) => {
//     return elem * 2;

// });

// console.log(newArr);
// console.log(arr);

// arr.forEach((elem, index) => {
//     arr[index] = elem * 2;
// })

// console.log(arr);

// newArr = arr.filter((elem) => {
//     return elem % 2 === 0 ;
// })

// console.log(arr);
// console.log(newArr);

// console.log(arr.reduce((preVal, curVal) => {
//     return preVal + curVal;
// }, 15));

//practice

//find the average marks from the marks array

// let marks = [90, 67, 55, 85, 72, 77, 92];

// let sum = 0;
// marks.forEach((elem)=> {
//     sum += elem;
// });

// const total = marks.reduce((acum, val) => {
//     return acum + val;
// })

// console.log(`Average marks ${(sum/marks.length).toFixed(3)}`);
// console.log(total/marks.length);

//take number input from user and fill that size array with zeros

// let number = Number(prompt("Enter the number"));

// let array = new Array(number);
// array.fill(0);

// console.log(array);

//fill array with natural numbers

// let number = Number(prompt("Enter the number"));
// let array = new Array(number).fill(0);

// let num = 1;
// array.forEach((elem, index) => {
//     array[index] = num;
//     num++;
// })

// console.log(array);

let arr = ["iron", "captain", "black", "wanda", "hulk", "b panther"];

// arr.push("spider man");
// arr.unshift("thor");

// console.log(arr);
// console.log(arr);
// arr.splice(2, 1, "Hawkeye");
// console.log(arr);

// console.log(arr.includes("captain"));

// let a = "Praveen";
// console.log(Array.isArray(a));
// console.log(arr instanceof Array);

// console.log(Array.from(a));
// let a = 1;
// let b = "cd";
// let c = {name: "Praveen"};
// let d = [1, 2, 3];

// console.log(Array(a, b, c ,d));

// let string = "madam";

// function checkPalindrome(string) {
//     let start = 0;
//     let end = string.length - 1;

//     while(start < end) {
//         if(string[start] !== string[end]) {
//             return false;
//         }
//         start++;
//         end--;
//     }
//     return true;
// }

// console.log(checkPalindrome(string))
// console.log(checkPalindrome([1, 2, 1]));

// let sentence = "praveen is a good boy, this is a boy by the way"

// let sentenceList = sentence.split(" ");

// let newSentenceList = sentenceList.map((elem) => {
//     return elem.charAt(0).toUpperCase() + elem.slice(1);
// })

// console.log(sentence);
// console.log(newSentenceList.join(" "));
