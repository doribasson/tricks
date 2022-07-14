1. Sorting in javascript
The sorting() array method in JS is a mutating method which means it modifies the order of the elements of the original array.

A better approach is to duplicate the array and sort it.

Sorting in JavaScript is by default lexicographic, so for sorting numbers, it's always essential to sort by a callback function. 

COPY 📋
// Sorting directly
const arr = [4, 20, 10, 1, 3, 5];
arr.sort(); // arr: [1, 10, 20, 3, 4, 5]
COPY 📋
// Sorting by duplicating the array
const arr = [4, 20, 10, 1, 3, 5];
const sortedArr = arr.slice().sort((a, b) => a - b);

// arr: [4, 20, 10, 1, 3, 5]
// sortedArr: [1, 3, 4, 5, 10, 20]
2. Flattening array in JavaScript
Flattening an array means putting all the elements of nested arrays into the main array. 

There are quite different ways to flatten arrays in JavaScript. There's a flat() method added in ES10 or Ecmascript version 2019 to flatten the array directly. 

flat() method takes an argument as the max. depth that has to be flattened to. The default depth is 1. 

To flatten the array of any depth use Infinity as the argument.

COPY 📋
const letters = ['a', 'b', ['c', 'd', ['e', 'f']]];
const flatArray = letters.flat(2); // Flatten until depth 2

// flatArray: ['a', 'b', 'c', 'd', 'e', 'f'];
3. Shuffle array in JavaScript
To shuffle an array we can use sort() method by returning a random positive or negative number in the callback.

We can generate random positive or negative number using

COPY 📋
// Random positive and negative number
Math.random() - 0.5
COPY 📋
const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
const shuffledArray = [...letters].sort(() => Math.random() - 0.5);

// shuffledArray: ["e", "d", "b", "a", "f", "c"]
// shuffledArray: ["b", "d", "f", "a", "c", "e"]
4. Filter falsy values
There are six falsy values in JavaScript. They are 0, '', null, undefined, false, NaN.

We can easily filter out those values using the Boolean global function.

COPY 📋
const arr = [1, 0, 2, '', 3, null, 4];
const filtered = arr.filter(Boolean); 

// filtered: [1, 2, 3, 4]
5. Object destructuring
Object destructuring is a very useful technic to extract values from an object in the desired variables. 

We can rename the keys using :(colon) and also assign default values using = if a certain destructured variable doesn't exist in the object.

We can also assign the object values to an already declared variable by wrapping the destructured code in parenthesis.

COPY 📋
const person = {
  name: 'John',
  years: 25,
  occupation: 'developer',
};

let occupation;

const { name, years: age, place = 'remote' } = person;
({ occupation } = person);

// name: John
// age: 25
// place: remote
// occupation: developer
6. Sleep or delay in JavaScript
JavaScript executes code synchronously. There's no built-in function in JS to sleep or delay synchronous code. 

We can create a sleep function with the help of a promise.

COPY 📋
// Sleep function using promise
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
COPY 📋
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function print() {
  console.log('First line ');
  await sleep(2000); // sleeps for 2 seconds
  console.log('Second line');
}

print();
// First line
// ...after 2 seconds
// Second line
7. Typecast strings to numbers
When you have an array of string numbers and type casting those to numbers can be done easily using the global Number function.

COPY 📋
const strings = ['1', '2', '3', '4' , '5'];
const numbers = strings.map(Number);

// strings: ['1', '2', '3', '4' , '5']
// numbers: [1, 2, 3, 4, 5]
8. !!, ~~, + operators
Convert any value to boolean using !!
! is a bitwise not operator. Using !! we can quickly convert any value to a boolean.

COPY 📋
const isPresent = 'yes';

!!isPresent; // true
Trim the decimal part using ~~
We can use ~~ to quickly trim the decimal part of a number. This can be used as an alternative to Math.floor().

In JavaScript ~number = -(number + 1)

COPY 📋
const price = 25.4;
~~price; // 25
Typecast string to a number using +
We can prefix + to string numbers to quickly convert them to number type.

COPY 📋
const rate = '15';
const amount = +rate;

// rate: '15'
// amount: 15
9. Nullish coalescing (??) and optional chaining (?.)
?? nullish coalescing operator is used to handle null or undefined values. 

Whenever null or undefined value is encountered we can return a default value.

This doesn't work for other boolean values like 0, NaN, '', false. To handle all boolean values we can use || logical OR.

COPY 📋
let visitor;
let person;

visitor = 'Doe';
person =  visitor ?? 'staff';
// person: Doe

visitor = null;
person =  visitor ?? 'staff';
// person: staff
Optional chaining is used to avoid throwing of error whenever there's a missing key in an object.

COPY 📋
const person = {
  name: 'John',
  books: null
}
person.books.name // throws error

person.books?.name // returns undefined
10. Remove the duplicates in an array
Removing duplicates could be cumbersome sometimes. But using the Set() this can be achieved in simple steps.

A Set is a collection of unique data types in Javascript. Learn about Javascript set here.

COPY 📋
const letters = ['a', 'b', 'c', 'b', 'a', 'd']; // duplicates
const uniqueLetters = [...new Set(letters)]; 

// uniqueLetters: ['a', 'b', 'c', 'd']
