//Instructions
// add the ability to each string, to get its unique/duplicates chars.

//Example
const str = "testtdddvbmm";
// duplicates : ["t"], unique: ["e","s"];

const getCharStatus = (str) => {
  let savedDuplicated = [];
  let savedNotDuplicated = [];
  const copyStr2 = str.split("");
  console.log(copyStr2);
  const copyStr = str.split("").reduce((acc, item) => {
    // acc[item] = acc[item] + 1 || 1; //count of duplicated
    if (acc[item] || 1 === item) {
      acc[item] = [...acc[item], item];
    } else acc[item] = item || 1;
    return acc;
  }, {});

  console.log("copyStr", copyStr);

  Object.keys(copyStr).forEach((key) => {
    if (Array.isArray(copyStr[key])) {
      savedDuplicated.push(copyStr[key][0]);
    } else savedNotDuplicated.push(copyStr[key]);
  });

  console.log("savedDuplicated:", savedDuplicated);
  console.log("savedNotDuplicated:", savedNotDuplicated);
};

getCharStatus(str);

// **************************************************************************************
// **************************************************************************************
// **************************************************************************************
//key and get item or array

const getCharStatus = (str) => {
  const copyStr = str.split("").reduce((acc, item) => {
    if (acc[item]) {
      acc[item] = [...acc[item], item];
    } else acc[item] = item;
    return acc;
  }, {});
  console.log(copyStr);
};

getCharStatus(str);

// **************************************************************************************
// **************************************************************************************
// **************************************************************************************
const getCharStatus = (str) => {
  const duplicateArr = [];
  const notDuplicateArr = [];
  const obj = {};
  [...str].forEach((item) => {
    if (obj[item]) {
      obj[item] = [...obj[item], item];
      console.log("obj[item]a:", obj["item"]);
    } else {
      obj[item] = item;
      console.log("obj[item]b:", obj["item"]);
    }
  });
  console.log(obj);

  for (const key in obj) {
    // if (iterable.hasOwnProperty(key)) {
    // console.log(key, "keyyy");

    // Array.isArray(obj[key]);
    if (obj[key] instanceof Array) {
      duplicateArr.push(key);
    } else notDuplicateArr.push(key);
  }
  console.log(duplicateArr);
  console.log(notDuplicateArr);
};

const str = "aaaraannxbc";
getCharStatus(str);

// **************************************************************************************
// **************************************************************************************
// **************************************************************************************
//with check arr in object..

const getCharStatus = (str) => {
  const duplicateArr = [];
  const notDuplicateArr = [];
  const obj = {};
  [...str].forEach((item) => {
    obj[item] = obj[item] ? [...obj[item], item] : item;
    console.log(obj);
  });

  for (const key in obj) {
    if (obj[key] instanceof Array) {
      duplicateArr.push(key);
    } else notDuplicateArr.push(key);
  }
  console.log(duplicateArr);
  console.log(notDuplicateArr);
  return { duplicateArr, notDuplicateArr };
};

const str = "aaaraannxbc";
const res = getCharStatus(str);

console.log(res);

// **************************************************************************************
// **************************************************************************************
// **************************************************************************************

//with check object in object..

const getCharStatus = (str) => {
  const duplicateArr = [];
  const notDuplicateArr = [];
  const obj = {};
  [...str].forEach((item) => {
    obj[item] = obj[item]
      ? {
          itemss: [...obj[item]["itemss"], item],
          count: obj[item]["count"] + 1,
        }
      : { itemss: item, count: 1 };
    console.log(obj);
  });

  for (const key in obj) {
    if (obj[key].count > 1) {
      duplicateArr.push(key);
    } else notDuplicateArr.push(key);
  }
  console.log(duplicateArr);
  console.log(notDuplicateArr);
  return { duplicateArr, notDuplicateArr };
};

const str = "aaaraannxbccc";
const res = getCharStatus(str);

console.log(res);

// **************************************************************************************
// **************************************************************************************
// **************************************************************************************
//best

function splitDupAndNotDup(str) {
  const objAllRepition = {};
  const dup = [];
  const notDup = [];
  [...str].forEach((i) => (objAllRepition[i] = (objAllRepition[i] || 0) + 1));

  for (const key in objAllRepition) {
    if (objAllRepition[key] > 1) {
      dup.push(key);
    } else {
      notDup.push(key);
    }
  }
  return { dup, notDup, objAllRepition };
}

const res = splitDupAndNotDup("doooorri");
console.log(res);
