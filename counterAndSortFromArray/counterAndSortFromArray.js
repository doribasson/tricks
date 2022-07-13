const words = ["aa", "bb", "bb", "aa", "cc", "bb"];
//["bb", "aa", "cc"]

const fn = (arr) => {
  console.log(arr);
  let obj = {};

  let arr2 = []; //[]
  arr.forEach((item, i) => {
    if (obj[item] === undefined) {
      obj[item] = 1;
    } else obj[item] = obj[item] + 1;
  });
  console.log({ obj });
  // let  set = new Set(arr);
  var result = Object.keys(obj).sort((a, b) => {
    console.log(a, b);
    if (obj[a] > obj[b]) return -1;
    else return 1;
  });
  console.log(result);
};

fn(words);

//const words = ["aa", "bb", "bb", "aa", "cc", "bb"];

//output before sort
// aa: 2
// bb: 3
// cc: 1

//output after sort
//(3) ["bb", "aa", "cc"]
// 0: "bb"
// 1: "aa"
// 2: "cc"

//bb have the bigger items than aa than cc...
//sort the array depend the

//solution 2************************* *************************

const arr = ["z", "f", "g", "f", "g", "c", "d", "n", "n"];

const mappingArrToObj = arr.reduce((obj, item) => {
  obj[item] = obj[item] + 1 || 1;
  return obj;
}, {});

console.log(mappingArrToObj);

var result = Object.keys(mappingArrToObj).sort(
  (a, b) => mappingArrToObj[b] - mappingArrToObj[a]
);
console.log(result);
