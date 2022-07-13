const obj4 = obj2.map(item =>
  item.name === "c" ? { ...item, age: "5" } : item
); //loop over object array and change specific item
const obj4 = obj2.map(item => ({ ...item, age: "5" })); //loop over object array and change cell cell.. get all and add new age

const arr = new Array(5).fill(0); //old es5 [ 0, 0, 0, 0, 0 ]
const arr1 = Array.from({ length: 5 }).fill(1); //old [ 1, 1, 1, 1, 1 ]
const arr2 = [...Array(5)].fill(2); //newer [ 2, 2, 2, 2, 2 ]
const arr3 = Array.from({ length: 5 }).map((item, i) => ++i); // [ 1, 2, 3, 4, 5 ]
const arr4 = [...Array(5)].map((item, i) => ++i); // [ 1, 2, 3, 4, 5 ]

console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

const mapp1 = arr4.map((item, i) => item === 3 || item === 5); //[ false, false, true, false, true ]
const rand = arr4.map((item, i) => (item = Math.floor(Math.random() * 10) + 1)); // random array
const filter = arr4.filter((item, i) => item === 3 || item === 5); //[3,5]

console.log(mapp1); //[ false, false, true, false, true ]
console.log(rand); // random array
console.log(filter); //[3,5]

const isExsist = arr4.some(item => item === 3); //true  -check if one of the cell ===3
const isExsist1 = arr4.some(item => item === 7); //false

const isExsist2 = arr4.findIndex(item => item === 3); //in cell 2 the value is 3
const isExsist3 = arr4.findIndex(item => item === 9); //-1 there is no cell
console.log(isExsist); //true
console.log(isExsist1); //false
console.log(isExsist2); //2
console.log(isExsist3); //-1

const getIndex = arr4.indexOf(4); //give 3 because the value 4 exsist in the array
const getIndex1 = arr4.indexOf("4"); //give -1 because the value "4" not exsist in array
console.log(getIndex);
console.log(getIndex1);

const arrToStr = arr4.join(""); //12345// from array [1.2,3,4,5] to string 12345
const arrToStr2 = arr4.join(" "); //12345// from array [1.2,3,4,5] to string 1 2 3 4 5
const arrToStr3 = arr4.join("_"); //12345//from array [1.2,3,4,5] to string 1_2_3_4_5
console.log(arrToStr);
console.log(arrToStr2);
console.log(arrToStr3);

const getIndexFromStr = arrToStr.indexOf(4); //return 3// the char is exsist in position 3
const getIndexFromStr2 = arrToStr.includes(4); //return true// true because exsist.. if not return false
console.log(arrToStr); //12345
console.log(getIndexFromStr); //3
console.log(getIndexFromStr2); //true

const strToArr = arrToStr.split(""); //[ '1', '2', '3', '4', '5' ]
const strToArrNumber = arrToStr.split("").map(item => Number(item)); //[ 1, 2, 3, 4, 5 ]
console.log(strToArr);
console.log(strToArrNumber);

const myReduce = strToArrNumber.reduce(
  (acc, item) => (item > 3 ? acc + 1 : acc),
  0
); //return from array 1 value depend on the if condistion;
console.log(myReduce); //2

const myReduce2 = strToArrNumber.reduce((acc, item) => {
  if (item > 3) acc++;
  return acc;
}, 0);
console.log(myReduce2); //2
