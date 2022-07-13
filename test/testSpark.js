// const mult = num => {
//   return num2 => num * num2;
// };

const mult = num => num2 => num * num2;

//the same just withOut arrow function
// const mult = function(num) {
//   return function(num2) {
//     return num * num2;
//   };
// };

const mult3 = mult(3);
const mult5 = mult(5);

console.log(mult3(2)); // 6
console.log(mult3(10)); // 30

console.log(mult5(2)); // 10
console.log(mult5(10)); // 50
