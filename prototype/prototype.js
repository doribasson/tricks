//Instructions
// add the ability to each string, to get its unique/duplicates chars.

//Example
const str = "test";
// duplicatesget 'test' and output : ["t"], unique: ["e","s"];

String.prototype.getCharStatus = (str) => {
  const duplicateArr = [];
  const notDuplicateArr = [];

  const copyStr = str.split("").reduce((acc, item) => {
    if (acc[item]) {
      acc[item] = [...acc[item], item];
    } else acc[item] = item;
    return acc;
  }, {});
  console.log(copyStr);

  for (const key in copyStr) {
    if (copyStr[key] instanceof Array) {
      duplicateArr.push(key);
    } else notDuplicateArr.push(key);
  }

  return { duplicateArr, notDuplicateArr };
};

const res = str.getCharStatus(str);
console.log(res);

// **************************************************************************************
// **************************************************************************************
// **************************************************************************************

String.prototype.getCharStatus = (str) => {
  let savedDuplicated = [];
  let savedNotDuplicated = [];
  const copyStr2 = str.split("");
  // console.log(copyStr2);
  const copyStr = str.split("").reduce((acc, item) => {
    // acc[item] = acc[item] + 1 || 1; //count of duplicated
    if (acc[item] || 1 === item) {
      acc[item] = [...acc[item], item];
    } else acc[item] = item || 1;
    return acc;
  }, {});

  // console.log("copyStr", copyStr);

  Object.keys(copyStr).forEach((key) => {
    if (Array.isArray(copyStr[key])) {
      savedDuplicated.push(copyStr[key][0]);
    } else savedNotDuplicated.push(copyStr[key]);
  });
  return { savedDuplicated, savedNotDuplicated };
};

const str = "abcdeeeff";
const str2 = "xxxxbccd";
const objArr = str.getCharStatus(str);
const objArr2 = str2.getCharStatus(str2);

console.log(objArr, "aa");
console.log(objArr2, "bb");

// **************************************************************************************
// **************************************************************************************
// **************************************************************************************
// if (!String.prototype.includes) {
//   String.prototype.includes = function(search, start) {
//     'use strict';
//     if (typeof start !== 'number') {
//       start = 0;
//     }

//     if (start + search.length > this.length) {
//       return false;
//     } else {
//       return this.indexOf(search, start) !== -1;
//     }
//   };
// }

// **************************************************************************************
// **************************************************************************************
// **************************************************************************************//mutate the fruits array

Array.prototype.myUcase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

// Use the method on any array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.myUcase();
console.log(fruits);

// **************************************************************************************
// **************************************************************************************
// **************************************************************************************//with copy -  not mutate the fruits array but return new array
Array.prototype.myUcase = function () {
  const copy = this.map((item) => item.toUpperCase());
  return copy;
};

// Use the method on any array
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const newfruitsUpperCase = fruits.myUcase();
console.log(newfruitsUpperCase);
console.log(fruits2);
