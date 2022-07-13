const obj = {
  firstName: "dori",
  lastName: "basson",
  age: 34
};

// console.log(obj);

obj.firstName = "lala";
// console.log(obj);

const arrObj = [
  { firstName: "dori", lastName: "c", age: 33 },

  { firstName: "roee", lastName: "basson", age: 31 },
  { firstName: "avi", lastName: "g", age: 24 }
];

// console.log(arrObj);

const obj2 = {
  1000: { names: ["a", "B", "c", "d"] },
  1001: { color: ["green", "black"] },
  1002: { page: 3 },
  1003: { str: "SAdsadssd" }
};
// console.log(obj2);
Object.values(obj2).forEach(val => console.log(val.names));

// for (const [key, value] of Object.entries(obj2)) {
//   console.log(`${value}`);
// }
//     console.log(`${key}: ${value}`);
// }

// Object.keys(obj2).forEach(function(key) {
//   console.log(key, obj2[key]);
// });

// for (const key in obj2) {
//   console.log(`${key}: ${obj2[key]}`);
// }

// const keys = Object.keys(obj2);
// console.log(keys);

// const keys = Object.values(obj2);
// console.log(keys);
// keys.forEach((key, index) => {
//   console.log(`${key}: ${obj2[key]}`);
// });

// Object.values(obj2).forEach(val => console.log(val));

// Object.entries(obj2).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });
