const arr = [2, 9, 6, 2, 5, 9, 7, 8, 9, 1, 8];

const temp = [...new Set(arr)].sort();
console.log(temp); //[1, 2, 5, 6, 7, 8, 9]
console.log(arr); //[2, 9, 6, 2, 5, 9, 7, 8, 9, 1, 8]
// console.log([...new Set(arr)]);

// ******************

// const withReduce = arr.reduce((acc, item) => {
//   acc[item] = item;
//   return acc;
// }, []);

// console.log(withReduce); //[undefined, 1, 2, undefined, undefined, 5, 6, 7, 8, 9]

// ******************
const withReduce = arr
  .reduce((acc, item) => {
    acc[item] = item;
    return acc;
  }, [])
  .filter((item) => !item !== undefined);

console.log(withReduce); //[1, 2, 5, 6, 7, 8, 9]

// ******************************************************

const arrPersons = [
  { id: "3", name: "dori", age: 35 },
  { id: "5", name: "roei", age: 34 },
  { id: "1", name: "ran", age: 36 },
  { id: "7", name: "ordit", age: 33 },
  { id: "9", name: "matan", age: 34 },
];

const arrPerson = { dori: "1", matan: "5", roei: "3" };

// console.log(arrPersons);

// const temp2 = Object.values(arrPersons).reduce((acc, item) => {
//   if (item.age) return acc + item.age;
//   return acc + Number(item);
// }, 0);
// const temp2 = Object.values(arrPerson).map((item, i) => {
//   return item;
// });

const fn = (arrOrObj) => {
  return Object.values(arrOrObj).reduce((acc, item) => {
    if (item.age) return acc + item.age;
    return acc + Number(item);
  }, 0);
};

const omyobj = fn(arrPerson);
const myArrr = fn(arrPersons);

console.log(omyobj);
console.log(myArrr);

// ******************************************************

const sortPersons = [...arrPersons].sort((a, b) => a.age - b.age);
console.log(sortPersons);

// ******************************************************

const minmumFromArr = arrPersons.reduce((prev, current) => {
  prev = prev.age < current.age ? prev : current;
  return prev;
}, {});

console.log(minmumFromArr, "the minmum");

let resultt = arrPersons.reduce(
  ({ min, max }, value) => ({
    min: Math.min(min, value.age),
    max: Math.max(max, value.age),
  }),
  {
    min: Infinity,
    max: -Infinity,
  }
);

console.log(resultt);

// ******************************************************
//sum the item

const arr6 = ["d", "b", "a", "c", "c"];

console.log(arr);

const temp9 = arr6.reduce((acc, item) => {
  acc[item] = acc[item] + 1 || 1;
  return acc;
}, {});

console.log(temp9);

// [object Object] {
//     a: 1,
//     b: 1,
//     c: 2,
//     d: 1
//   }

// ******************************************************

//concat arrays to 1 array
const a = [5, 6, 7, 8];
const b = [1, 2, 3, 4];

const c = b.concat(a);
console.log(c);

const first = [["d"], ["b"], ["a"], ["c"]];
console.log(first);
const firstt = first.reduce((acc, item) => {
  acc = acc.concat(item);
  return acc;
});

console.log(firstt);

// ******************************************************

const newArrPersons = [...arrPersons];
console.log({ newArrPersons });

//change specific item from array
const newArrPersons2 = arrPersons.map((item) =>
  item.name.toLowerCase().includes("dori".toLowerCase())
    ? { ...item, age: 55 }
    : item
);

console.log(newArrPersons2);

//add to array
const newPerson = { id: "88", name: "new", age: 22 };
const newArrPersons3 = [...arrPersons, newPerson];
console.log(newArrPersons3);

//delete from array with filter
const newArrPersons4 = arrPersons.filter(
  (item) => !item.name.toLowerCase().includes("dori".toLowerCase())
);
console.log(newArrPersons4);

//delete from array2 with splice
const findTheIndex = arrPersons.findIndex((item) =>
  item.name.toLowerCase().includes("ordit".toLowerCase())
);
console.log({ findTheIndex });
const removeFromArray2 = [...arrPersons];
removeFromArray2.splice(findTheIndex, 1);
console.log(removeFromArray2);
