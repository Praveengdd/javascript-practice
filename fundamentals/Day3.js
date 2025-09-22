//loops

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i ** 2);
//   i += 1;
// }

// i = 1;
// do {
//   console.log("This statement will get executed");
// } while (false);

// let string = "Praveen Kumar G D is the best";

// for (let char of string) {
//   console.log(char);
// }

// obj = {
//   firstName: "Praveen",
//   lastName: "Kumar G D",
//   age: 22,
//   location: "Mandya",
//   gender: "Alpha Male",
// };

// for (let key of obj) {
//   console.log(obj[key]);
// }

//challenges
//print even numbers from 0 to 100

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//print number of vowels and consonants in a given string Assume that string has only alphabets
// let vowelsCount = 0;
// let consonantCount = 0;
// let str = "praveen";

// for (let char of str) {
//   if (
//     char === "A" ||
//     char === "a" ||
//     char === "E" ||
//     char === "e" ||
//     char === "i" ||
//     char === "i" ||
//     char === "o" ||
//     char === "o" ||
//     char === "U" ||
//     char === "u"
//   )
//     vowelsCount += 1;
//   else consonantCount += 1;
// }

// console.log(`Vowel Count: ${vowelsCount}, Consonant Count: ${consonantCount}`);

//loop to calculate sum of first n numbers

// const n = 10;
// let sum = 0;

// for(let i = 1; i <= n; i++) {
//     sum += i;
// }

// console.log(sum);

//loop to calculate sum of numbers from m to n

// let m = 10;
// let n = 100;
// let sum = 0;

// for (let i = m; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

//print all odd numbers from 0 to n

// let n = 150;
// for (let i = 0; i <= n; i++) {
//   if (i % 2 === 1) console.log(i);
// }

// let chances = 20;
// const numberToGuess = 18;

// alert("Guess a number between 1 to 20");
// while (chances >= 0) {

//   let num = Number(prompt("Enter the number:"));
//   if (num === numberToGuess) {
//     console.log("Congratulations, you guessed the number");
//     console.log(`With still ${chances} remaining`);
//     break;
//   } else if (num < numberToGuess) {
//     console.log("Too low");
//     chances--;
//     console.log(`Still ${chances} remaining`);
//   } else {
//     console.log("Too high");
//     chances--;
//     console.log(`Still ${chances} remaining`);
//   }
// }

//password checker with fixed attempts

// const dbuser = "praveen@456";
// const dbpass = "123456";

// let attempts = 5;

// while(attempts > 0) {
//     let user = prompt("Enter username");
//     let pass = prompt("Enter password");

//     if(user && pass && user === dbuser && pass === dbpass) {
//         console.log("Login Successfull");
//         break;
//     }
//     else{
//         console.log("Invalid username or password");
//         attempts--;
//         console.log(`Still ${attempts} attempts remaining`);
//     }
// }

//to find factorial of a number

// let factorial = 1;
// const n = 5;
// let i = 1;

// while(i <= 5) {
//     factorial *= i;
//     i++;
// }

// console.log(factorial);

// let n = 10;
// for(let i = 1; i <= n; i++) {
//     let empStr = "";
//     for(let j = 1; j <= i; j++) {
//         empStr += j + " ";
//     }
//     console.log(empStr);

// }

//Text base adventure game

// let playing = "yes";

// while (playing === "yes") {
//   let direction = prompt("Choose will you go (left/right)");

//   if (direction === "left") {
//     alert("You go into swamp");
//     let pickup = prompt("You saw something shiny will you pick it up(yes/no)");
//     if (pickup === "yes") {
//       alert("you picked up magic stone, teleported safety, you win");
//     } else if (pickup === "no") {
//       alert("you sink slowly into mud, Game over");
//       break;
//     }
//   } else if (direction === "right") {
//     alert("You find a cave");
//     let enter = prompt("Will you enter cave(yes/no)");
//     if(enter === "yes") {
//         alert("A dragon wakes up and chases you, you barely escape");
//     }
//     else if(enter === "no") {
//         alert("You camp outside the cave, you have a peaceful night, you win");
//     }
//   }

//   playing = prompt("Do you wanna play again(yes/no)");
// }

// alert("Thanks for playing");
