//hoisted how scope work
// console.log(a);
// console.log(d);

// var a = 0;
// var b = 5;
// let c;
// let d = 8;
// console.log(a);
// console.log(d);

// {
//   console.log(a);
//   console.log(d);
// }

function check() {
  var a = 11;
  // var a = 12;
  let b = 12;
  // let b = 111;
  let c = 13;
  let d = 14;
  console.log("a: ", a);
  console.log("b: ", b);
  console.log("c: ", c);
  console.log("d: ", d);
}

function check1() {
  var a = 55;
  // a = 55;
  console.log("a: ", a); //55 -  var a  is new var, so take from here and his not go to his parnts lexicle.
  console.log("b: ", b); //5 take from his parnts lexicle because not have var b in this func;
  console.log("c: ", c); //undefined becuase let c in the parnts; not initlizte... let c=9;
  console.log("d: ", d); // 8
}

console.log("a: ", a); //undefined becuase var a = 3; is below the console..

// check();
// check1();

var a = 3;
var b = 5;
let c;
let d = 8; //if let d = 8;  was below console.log("d: ", d); so ReferenceError
console.log("a: ", a);
check1();
// let d = 8;
console.log("a: ", a);
console.dir(check1);

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
