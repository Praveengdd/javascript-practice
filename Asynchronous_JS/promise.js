// let p1 = new Promise((resolve, reject) => {
//   //   console.log("This is a promise");
//   //   resolve("Data Fetched Successfully");
//   //   resolve({
//   //     name: "Praveen Kumar G D",
//   //     age: 22,
//   //     location: "Mandya",
//   //     isMarried: false,
//   //   });

//   reject({ status: 400 });
// });

// console.log(p1);

// let prom = new Promise((resolve, reject) => {
//   resolve({
//     name: "Praveen Kumar G D",
//     age: 22,
//     location: "Mandya",
//     isMarried: false,
//   });
//   reject("Something went wrong");
// });

// prom.then((response) => {
//   console.log("Promise is fullfilled");
//   console.log(response);
// });

// prom.catch((message) => {
//   console.log("Promise is not fullfilled");
//   console.log(message);
// });

// prom
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject({ name: "Praveen Kumar G D", age: 22 });
//   }, 3000);
// });

// console.log(p1);

// p1.then((data) => {
//   console.log(data);
//   console.log(p1);
// }).catch((err) => {
//   console.log(err);
//   console.log(p1);
// });

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         name: "Praveen Kumar G D",
//       });
//     }, 3000);
//   });
// }

// function fetchInfo(username) {
//   return new Promise((resolve, reject) => {
//     if (username.toLowerCase().includes("Monica")) {
//       setTimeout(() => {
//         resolve({
//           age: 22,
//           location: "Mandya",
//           isMarried: false,
//           profession: "Student",
//         });
//       }, 3000);
//     } else {
//       reject("Unknown user");
//     }
//   });
// }

// function printData() {
//   let user = fetchUser();
//   user
//     .then((data) => {
//       let info = fetchInfo(data.name);
//       info
//         .then((userInfo) => {
//           console.log("User Details Found");
//           console.log(data.name);
//           console.log(userInfo);
//         })
//         .catch((err) => {
//           console.log("Something went wrong,", err);
//         });
//     })
//     .catch((err) => {
//       console.log("Something went wrong,", err);
//     });
// }

// printData();

// let data = fetch("https://jsonplaceholder.typicode.com/users");

// data
//   .then(() => {
//     return fetch("https://jsonplaceholder.typicode.com/users");
//   })
//   .then((response) => {
//     response.json().then((data) => {
//       console.log(data);
//     });
//   });
