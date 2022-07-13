//closure 1
var t = 10;
let x = () => {
  var a = 7;
  let b = 5;
  // console.log("lala");
  return () => {
    console.log("a:", a);
    console.log("b:", b);
    console.log("t:", t);
  };
};

// const f = x();
// f();
//the same
x()();
console.dir(x());
console.log("");
console.log("");

//closure 2
function foo() {
  let x = 42;
  console.log("x before inner func:", x);

  let inner = function() {
    console.log("x after inner func:", x);
  };
  x = x + 1;
  return inner;
}

// var f = foo();
// f();
//the same like =>  foo()();
foo()();
// console.dir(foo());

console.log("");
console.log("");

//closure 3
function foo2() {
  // const secret = Math.trunc(Math.random() * 100); //Math.trunc make it int
  const secret = (Math.random() * 100) | 0; // |0; make it int with bitwise or more faster
  return function inner() {
    console.log(`the secret number is ${secret}`);
  };
}

foo2()();

function createObject() {
  let x = 42;
  return {
    log() {
      console.log("x:", x);
    },
    increment() {
      console.log("x before increment:", x);
      x++;
      console.log("x after increment:", x);
    },
    update(value) {
      x = value;
    }
  };
}

const o = createObject();
o.increment();
o.log(); //43
o.update(5); //5
o.log(); //5
const p = createObject();
p.log(); //42

// import React from "react";

// const App = () => {
//   var num = 0;
//   let num1 = 5;
//   let num2 = 6;
//   const fn = runOnce => {
//     let num3 = 6;
//     console.log(num1);
//     console.log(num2);
//   };
//   console.log(num1);
//   console.log(num2);

//   console.dir(fn);
//   return (
//     <div>
//       <button onClick={fn}>Click</button>
//     </div>
//   );
// };

// export default App;
