// // console.log("Hello World");

// // console.log(1 + 2);

// // let age;
// // age = 24;
// // console.log(age);

// // let abc = "bcd";
// // console.log(abc);

// // let a = 1,
// //   b = 2,
// //   c = 3;
// // console.log(a, b, c);

// // {
// //   const pi = 3.142;
// //   console.log(pi);
// // }

// // let name = "Praveen";
// // let Name = "PRAVEEN";

// // console.log(name, Name);

// // let priceOne = 543;
// // let priceTwo = 688;
// // console.log(priceOne + priceTwo);

// // name = "Praveen";
// // console.log(name, typeof name);
// // name = 123;
// // console.log(name, typeof name);
// // name = true;
// // console.log(name, typeof name);

// // console.log(typeof (2 + "22"));
// // console.log(typeof ("22" - 2));

// let price = 150;
// let quantity = 3;

// let totalPrice = price * quantity;
// let discountRate = 0.1;

// let discount = totalPrice * discountRate;
// let finalPrice = totalPrice - discount;

// console.log("Price of the product:", price);
// console.log("Quantity of the product:", quantity);
// console.log("Total Price:", totalPrice);
// console.log("Discount for the product is " + discountRate * 100 + "%");
// console.log("Discount for the product is:", discount);
// console.log("Final Price payable is:", finalPrice);

// let number = 66;
// let name = "Praveen";
// console.log(number, name);

// number = number + 4;
// console.log(number);

// console.log(5 > 3);

// console.log(5 === 5);
// console.log("5" === 5);

// let age = 16;

// let message = age >= 18? "Eligible for Booking": "Not Eligible for Booking";

// console.log(message);

// let username = "praveen@456";
// let password = "Kodiyala@123";

// message = (username && password)? "Login Successfull": "Both fields are required";

// console.log(message);

// let a = 10;
// let b = 8;
// let c = 14;
// let result = a > b ? (a > c ? a : c) : b > c ? b : c;

// console.log(result);

// const a = Number(prompt("Enter an number: "));
// const b = Number(prompt("Enter another number"));

// console.log("All the possible arithmetic results:");
// console.log("Addition:", Number(a + b));
// console.log("Subraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulo:", a % b);
// console.log("Exponentiation:", a ** b);

// let a = b = c = 18;
// console.log(a, b, c);

// result =
//   number >= 10 && number <= 20
//     ? "Number is within range of 10 and 20"
//     : "Number is out of range";
// console.log(result);

// let a = 12,
//   b = 23,
//   c = 10;

// result = a > b ? (a > c ? a : c) : b > c ? b : c;
// console.log(result);

// let username = "praveen456";
// let password = "Kodiyala@123";

// let dbuser = "praveen456";
// let dbpass = "Kodiyala@123";

// let result =
//   username && password
//     ? username === dbuser && password === dbpass
//       ? "Login Successfull"
//       : "Wrong Credentials"
//     : "Both Fields are Required";
// console.log(result);

// let productStock = 5;

// if (productStock === 0) {
//   console.log("Product is out of stock");
// } else {
//   console.log("Product is still available");
// }

// let age = 22;
// let hasId = true;

// if (age >= 18) {
//   if (hasId) {
//     console.log("You can enter the club");
//   } else {
//     console.log("You need Id to enter the club");
//   }
// } else {
//   console.log("You are too young to enter the club");
// }

// let score = 68;

// if (score >= 90 && score <= 100) {
//   console.log("Your grade is A");
// } else if (score >= 80 && score < 90) {
//   console.log("Your grade is B");
// } else if (score >= 65 && score < 80) {
//   console.log("Your grade is C");
// } else if (score >= 45 && score < 65) {
//   console.log("Your grade is D");
// } else {
//   console.log("Your have failed in the exam");
// }

// let color = "orange";

// switch(color) {
//   case "red":
//     console.log("Stop at the signal");
//     break;
//   case "orange":
//     console.log("Get ready to move from the signal");
//     break;
//   case "green":
//     console.log("Move from the signal");
//     break;
//   default:
//     console.log("Unknown color");
// }

// let cartValue = Number(prompt("Enter cart value: "));

// if(cartValue < 50) {
//   cartValue = cartValue + 0;
// }
// else if(cartValue >= 50 && cartValue <= 100) {
//   cartValue = cartValue - (cartValue * 0.1);
// }
// else if(cartValue > 100) {
//   cartValue = cartValue - (cartValue * 0.2);
// }

// console.log("Final Price", cartValue);

// let hasSubscription = true;
// let subscription = "basic";

// if(hasSubscription) {
//   if(subscription === "premium") {
//     console.log(`You have ${subscription} subscription`);
//   }
//   else if(subscription === "basic") {
//     console.log(`You have ${subscription} subscription`);
//   }
//   else{
//     console.log(`Unknown Subscription`)
//   }
// }
// else{
//   console.log("Please buy a subscription");
// }

// let color = prompt("Enter a color among colors{red, green, blue, orange}:");

// if(color == "red") {
//   alert("Theme set to red color");
// }
// else if(color == "green") {
//   alert("Theme set to green color");
// }
// else if(color == "blue") {
//   alert("Theme set to blue color");
// }
// else if(color == "orange") {
//   alert("Theme set to orange color");
// }
// else{
//   alert("Unknown color option selected!!!");
// }

// numOne = Number(prompt("Enter first number:"));
// numTwo = Number(prompt("Enter second number:"));
// numThree = Number(prompt("Enter third number:"));

// if (numOne < numTwo && numOne < numThree) {
//   console.log(`${numOne} is the smallest`);
// } else if (numTwo < numOne && numTwo < numThree) {
//   console.log(`${numTwo} is the smallest`);
// } else if (numThree < numTwo && numThree < numOne) {
//   console.log(`${numThree} is the smallest`);
// }

// let role = prompt("Select a role(admin, editor, viewer)");

// switch(role) {
//   case "admin":
//     console.log("Full access");
//     break;
//   case 'editor':
//     console.log("Editing access");
//     break;
//   case 'viewer':
//     console.log("Viewing only");
//     break;
//   default:
//     console.log("Invalid role entered");
// }

// let number = Number(prompt("Enter a number:"));

// if(number % 3 === 0 && number % 5 === 0) {
//   alert("FizzBuzz");
// }
// else if(number % 3 === 0) {
//   alert("Fizz");
// }
// else if(number % 5 === 0) {
//   alert("Buzz");
// }
// else{
//   alert("Neither divisble 5 nor divisible by 3");
// }

// let op = prompt("Select an operation(+, -, *, /)")
// let numOne = Number(prompt("Select the first number:"));
// let numTwo = Number(prompt("Select second number:"))

// switch(op) {
//   case '+':
//     console.log(`Result ${numOne + numTwo}`);
//     break;
//   case '-':
//     console.log(`Result ${numOne - numTwo}`);
//     break;
//   case '*':
//     console.log(`Result ${numOne * numTwo}`);
//     break;
//   case '/':
//     console.log(`Result ${numOne / numTwo}`);
//     break;
//   default:
//     console.log("Invalid operator selected");
// }

// let balance = 500000;

// let userChoice = Number(
//   prompt(`Enter you choice:
//   1. Check Balance
//   2. Deposit
//   3. Withdraw
//   4. Exit`)
// );

// if (userChoice === 1) {
//   alert(`Your Balance is ${balance}`);
// } else if (userChoice === 2) {
//   let deposit = Number(prompt("Enter the amount to be deposited"));
//   if (deposit <= 1) {
//     alert("Invalid deposit amount entered");
//   } else {
//     balance += deposit;
//     alert(`${deposit} deposited to your account`);
//     alert(`New Balance: ${balance}`);
//   }
// } else if (userChoice === 3) {
//   let withdraw = Number(prompt("Enter the amount to be withdrawed"));
//   if (withdraw <= 1) {
//     alert("Invalid amount entered to withdraw");
//   } else if (withdraw > balance) {
//     alert("Balance is less");
//   } else {
//     balance -= withdraw;
//     alert(`${withdraw} withdrawed from your account`);
//     alert(`New Balance: ${balance}`);
//   }
// } else if (userChoice === 4) {
//   alert("Exited successfully");
// } else {
//   alert("Invalid choice selected");
// }
