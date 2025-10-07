// let studentData = {
//   name: "Praveen Kumar G D",
//   age: 22,
//   gender: "male",
//   isMarried: false,
//   address: {
//     city: "Mysore",
//     area: "Belavadi",
//     pin: 570002,
//     state: "Karnataka",
//   },
// };

// let studentName = studentData.name;
// let gender = studentData["gender"];
// let isMarried = studentData.isMarried;
// console.log(studentName);
// console.log(gender);
// console.log(isMarried);

// let {
//   isMarried,
//   name,
//   gender,
//   address: { pin },
// } = studentData;

// console.log(name);
// console.log(gender);
// console.log(isMarried);
// console.log(pin);

// let arr = [1, 2, 3, 4];

// let [num1, num2, num3] = arr;
// console.log(num1, num2);
// console.log(num3);

//Arrays

// let arr = [1, 2, 3, "Praveen", false];

// let [num1, num2, num3, name, bool] = arr;

// console.log(num1, num2, num3);
// console.log(name);
// console.log(bool);

// let [num1, num2, num3, ...otherDetails] = arr;
// console.log(num1, num2, num3);
// console.log(otherDetails);

// let arr = [1, 3, 7, 5];

// let [a, , , d] = arr;

// console.log(a, b, d);

// console.log(a, d);

// let [a, b, c = 9, d = 11] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let a = 4,
//   b = 5;

// [a, b] = [b, a];
// console.log(a, b);

// let arr = [1, 2, 3, [5, 6]];

// let [a, , , [d, e]] = arr;
// console.log(a);
// console.log(d, e);

//OBJECTS

// let obj = {
//   name: "Praveen Kumar G D",
//   age: 22,
//   address: {
//     city: "Bangalore South",
//     pin: 572211,
//     state: "Karnataka",
//     coordinates: [1.2, 2.3, 4.5, 5.6],
//   },
//   gender: "male",
//   salary: 2001,
// };

// let { age, name } = obj;

// console.log(name, age);

// let { name, ...otherDetails } = obj;

// console.log(name);
// console.log(otherDetails);

// let { name, salary = 2000 } = obj;
// console.log(name, salary);

// let { name: fullName, age: userAge } = obj;

// console.log(fullName);
// console.log(userAge);

// let {
//   name: fullName,
//   address: {
//     pin,
//     state,
//     coordinates: [a, b],
//   },
// } = obj;

// console.log(fullName);
// console.log(pin, state);
// console.log(a, b);

// function sum([a, b]) {
//   console.log(a + b);
// }

// let arr = [10, 5];
// sum(arr);

// let obj = {
//   name: "Praveen Kumar G D",
//   age: 22,
//   location: "Mandya",
// };

// function greet({ name, location }) {
//   console.log(`Hello ${name} from ${location}!!!!`);
// }

// greet(obj);

//Practice

// let arr = [1, 2, 3];
// let obj = { ...arr };
// console.log(obj);

// let obj = {
//   name: "Praveen Kumar G D",
//   age: 22,
//   location: "Mandya",
// };

// newObj = {
//   ...obj,
//   name: "Pavan the Boss",
//   age: 21,
//   location: "Bangalore South",
//   gender: "Male",
// };

// console.log(obj, newObj);

// function seperateOddEven(...numbers) {
//   let even = numbers.filter((elem) => {
//     return elem % 2 === 0;
//   });

//   let odd = numbers.filter((elem) => {
//     return elem % 2 === 1;
//   });

//   return {
//     even,
//     odd,
//   };
// }

// let { even: evenNumbers, odd: oddNumbers } = seperateOddEven(
//   1,
//   2,
//   34,
//   5,
//   45,
//   13,
//   3,
//   43,
//   12,
//   19,
//   18,
//   20
// );

// console.log(evenNumbers);
// console.log(oddNumbers);

// function useState(initialValue) {
//   let value = initialValue;

//   function setValue(val) {
//     value = val;
//   }

//   function getValue() {
//     return value;
//   }

//   return [getValue, setValue];
// }

// let [getData, func] = useState(5);

// console.log(getData());
// func(55);
// console.log(getData());
