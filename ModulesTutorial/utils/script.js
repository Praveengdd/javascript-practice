// const { name: fullName, age: dob } = require("./math.js");

// console.log(fullName);
// console.log(dob);

// let { sum: add, sub: diff, mul: prod } = require("./math.js");

// add(2, 3);
// diff(7, 2);
// prod(9, 9);

import sumFunc from "../math.js";
import { sub as subFunc, mul, divide, modulo } from "../math.js";

// let { sum, sub, mul } = obj;

// sum(2, 3);
// sub(7, 3);
// mul(81, 3);
// add(2, 3);
// diff(7, 5);
// prod(9, 9);

sumFunc(2, 3);

// import divide from "../math.js";

// divide.divide(5, 2.5);

console.log(subFunc, mul, divide, modulo);

subFunc(55, 9);
mul(8, 74);
divide(55, 5);
modulo(7, 2);
