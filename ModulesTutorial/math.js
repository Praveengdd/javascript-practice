// let name = "Praveen Kumar G D";
// let age = 21;

// module.exports = { name, age };

function sum(a, b) {
  console.log(a + b);
}

export function sub(a, b) {
  console.log(a - b);
}

export function mul(a, b) {
  console.log(a * b);
}

export function divide(a, b) {
  console.log(a / b);
}

export function modulo(a, b) {
  console.log(a % b);
}

// module.exports = {
//   sum,
//   sub,
//   mul,
// };

export default sum;
