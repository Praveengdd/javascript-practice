// console.log("hello world");

// function getData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         name: "Praveen Kumar G D",
//         data,
//       });
//     }, 3000);
//   });
// }

// async function fetchData() {
//   let response1 = await getData(1);
//   console.log(response1);
//   let response2 = await getData(2);
//   console.log(response2);
//   let response3 = await getData(3);
//   console.log(response3);
//   let response4 = await getData(4);
//   console.log(response4);
//   let response5 = await getData(5);
//   console.log(response5);

//   console.log("Some tasks going on");
//   console.log("Some tasks going on");
//   console.log("Some tasks going on");
//   console.log("Some tasks going on");
// }

// fetchData();

// console.log("Some tasks going on outside the scope");
// console.log("Some tasks going on outside the scope");
// console.log("Some tasks going on outside the scope");
// console.log("Some tasks going on outside the scope");
// console.log("Some tasks going on outside the scope");

// async function getData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();

//   return data;
// }

// let users = getData().then((data) => {
//   return data;
// });

// console.log(users);
