//regular delay ms secone
export default function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//call this from component
async function fn(color) {
  await timeout(1000);
}

fn();
// ************************************************************

//ts
// function wait<T>(ms: number, value: T) {
//     return new Promise<T>((resolve) => setTimeout(resolve, ms, value));
// }

//or inline...  const delay = ms => new Promise(res => setTimeout(res, ms));

// function wait(ms){
//   var start = new Date().getTime();
//   var end = start;
//   while(end < start + ms) {
//     end = new Date().getTime();
//  }
// }
// console.log("before");
// wait(7000); //7 seconds in milliseconds
// console.log("after");

// ************************************************************

// ************************************************************
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fn() {
  //async regular for... (map()..filter()..forEach() will not work.. they sync..)
  for (let i = 0; i < 5; i++) {
    // for (const item of arr) { async for.. for item from array
    console.log(i + 1);
    await sleep(1000);
  }
}

fn();

// ************************************************************

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000); //each one the ms will grow in i
}

// ************************************************************

// const timeout = (ms) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

// const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//func return promise
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

for (let i = 1, p = Promise.resolve(); i <= 5; i++) {
  p = p.then(() => timeout(1000)).then(() => console.log(i));
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// ************************************************************

//with varible promise.. after 2 sec we get lol
const promise = new Promise((resolve) =>
  setTimeout(() => resolve("lol"), 2000)
);
promise.then((res) => console.log(res));

//or
// const fn = async () => {
//   const res = await promise;
//   console.log(res);
// };
// fn();

// ************************************************************

// with func that get ms
const sleep = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve("lol"), ms));

sleep(2000).then((res) => console.log(res));

//or
// (async function fn() {
//   const res = await sleep(2000);
//   console.log(res);
// })();

// ************************************************************

// ************************************************************

const emails = ["alice@gmail.com", "bob@gmail.com", "charlie@gmail.com"];
const send = (email) =>
  new Promise((resolve) => setTimeout(() => resolve(email), 1000));

const sendAllEmails = async () => {
  for (const email of emails) {
    const emailInfo = await send(email);
    console.log(`Mail sent to ${emailInfo}`);
  }
  console.log("All emails were sent");
};

sendAllEmails();

// ************************************************************

//in the helper debounce.ts/js
export const debounce = (fn, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(...args), delay);
  };
};

//in the components.. onchange="optimizeDebounce"..
const optimizeDebounce = useCallback(debounce(handleChange, 500), []);
