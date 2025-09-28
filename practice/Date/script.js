// let date = new Date(0);

// console.log(date.toString());

// let date = new Date();

// let thirtyDays = 1000 * 60 * 60 * 24 * 30;

// let deadLine = new Date(date.getTime() + thirtyDays);
// console.log(date, deadLine);

// let userDate1 = new Date("2025-10-17");
// let userDate2 = new Date("2025-11-15");

// function checkDeadLine(userDate) {
//     if(userDate < deadLine) {
//         console.log("You can proceed with work");
//     }
//     else {
//         console.log("Your deadline is expired");
//     }
// }

// checkDeadLine(userDate1);
// checkDeadLine(userDate2);

// let date1 = new Date("2003-12-17");
// let date2 = new Date("2025-12-17");

// let milliDiff = date2 - date1;

// console.log(`${Math.floor(milliDiff/1000/60/60/24/365)}years ${Math.floor(milliDiff/1000/60/60/24/365) * 12}months
//             ${Math.floor(milliDiff/1000/60/60/24)}days ${Math.floor(milliDiff/1000/60/60)}hours ${Math.floor(milliDiff/1000/60)}minutes
//             ${Math.floor(milliDiff/1000)}seconds`)

// let date = new Date();

// function addNDays(n, date) {
//     let milliDate = date.getTime();
//     let newDay = new Date(milliDate + (1000 * 60 * 60 * 24 * n));
//     return newDay;
// }

// console.log(addNDays(7, date).toLocaleString());

// let birthDate = new Date("2003-12-17T06:30");

// function calDOB(date) {
//     let ageMilli = new Date() - birthDate;
//     let ageYears = ageMilli / 1000 / 60 / 60 / 24/ 365;
//     console.log(Math.floor(ageYears));
// }

// calDOB(birthDate);

let date = new Date();





function formatDate(date) {
  const monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  console.log(`${monthsShort[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`);
}


formatDate(date);
