//count duplicate
const arr = ["d", "b", "a", "c", "c"];
console.log(arr);
const temp = arr.reduce((acc, item) => {
  acc[item] = acc[item] + 1 || 1;
  return acc;
}, {});
console.log(temp);

/////////////////////////////////////////////////////////////

//2. A simple search (case-sensitive)
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const users2 = [
  { id: 11, name: "Adam", age: 23, group: "editor" },
  { id: 47, name: "John", age: 28, group: "admin" },
  { id: 85, name: "William", age: 34, group: "editor" },
  { id: 97, name: "Oliver", age: 28, group: "admin" },
];

let res = users2.filter((it) => it.name.includes("oli"));

// res is []

/////////////////////////////////////////////////////////////

//3. A simple search (case-insensitive)
let res2 = users.filter((it) => new RegExp("oli", "i").test(it.name));

// res is
[{ id: 97, name: "Oliver", age: 28, group: "admin" }];

/////////////////////////////////////////////////////////////

//4. Check if any of the users have admin rights
//The some() method tests whether at least one element in the array passes the test implemented by the provided function.

const hasAdmin = users.some((user) => user.group === "admin");

// hasAdmin is true

/////////////////////////////////////////////////////////////

//5. Flattening an array of arrays
//The result of the first iteration is equal to : […[], …[1, 2, 3]] means it transforms to [1, 2, 3] — this value we provide as an ‘acc’ on the second iteration and so on.

const nested = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let flat = nested.reduce((acc, it) => [...acc, ...it], []);

// flat is [1, 2, 3, 4, 5, 6, 7, 8, 9]

//We can slightly improve this code by omitting an empty array[]as the second argument for reduce(). Then the first value of the nested will be used as the initial acc value. Thanks to Vladimir Efanov.

let flatimprove = nested.reduce((acc, it) => [...acc, ...it]);
//let flatimprove = [].concat.apply([], nested);

// flat is [1, 2, 3, 4, 5, 6, 7, 8, 9]


/////////////////////////////////////////////////////////////
//6. Create an object that contains the frequency of the specified key
Let’s group and count the ‘age’ property for each item in the array:

const users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

const groupByAge = users.reduce((acc, it) => {
  acc[it.age] = acc[it.age] + 1 || 1;
  return acc;
}, {});

// groupByAge is {23: 1, 28: 2, 34: 1}




/////////////////////////////////////////////////////////////

//7. Indexing an array of objects (lookup table)
//Instead of processing the whole array for finding a user by id, we can construct an object where the user’s id represents a key (with constant searching time).

const uTable = users.reduce((acc, it) => (acc[it.id] = it, acc), {})

// uTable equals:
// {
//   11: { id: 11, name: 'Adam', age: 23, group: 'editor' },
//   47: { id: 47, name: 'John', age: 28, group: 'admin' },
//   85: { id: 85, name: 'William', age: 34, group: 'editor' },
//   97: { id: 97, name: 'Oliver', age: 28, group: 'admin' }
// }
//It’s useful when you have to access your data by id like uTable[85].name a lot.


/////////////////////////////////////////////////////////////
//8. Extract the unique values for the given key of each item in the array
//Let’s create a list of existing users’ groups. The map() method creates a new array with the results of calling a provided function on every element in the calling array.

const listOfUserGroups = [...new Set(users.map(it => it.group))];

// listOfUserGroups is ['editor', 'admin'];

/////////////////////////////////////////////////////////////
//9. Object key-value map reversal
const cities = {
  Lyon: 'France',
  Berlin: 'Germany',
  Paris: 'France'
};

let countries = Object.keys(cities).reduce(
  (acc, k) => (acc[cities[k]] = [...(acc[cities[k]] || []), k], acc) , {});
  
// // countries is
// {
//   France: ["Lyon", "Paris"],
//   Germany: ["Berlin"]
// }

/////////////////////////////////////////////////////////////
//This one-liner looks quite tricky. We use the comma operator here, and it means we return the last value in parenthesis — acc. Let’s rewrite this example in a more production-ready and performant way:

let countries2 = Object.keys(cities).reduce((acc, k) => {
  let country = cities[k];
  acc[country] = acc[country] || [];
  acc[country].push(k);
  return acc;
}, {});


/////////////////////////////////////////////////////////////

//10. Create an array of Fahrenheit values from an array of Celsius values
//Think of it as processing each element with a given formula ?

const celsius = [-15, -5, 0, 10, 16, 20, 24, 32]
const fahrenheit = celsius.map(t => t * 1.8 + 32);

// fahrenheit is [5, 23, 32, 50, 60.8, 68, 75.2, 89.6]


/////////////////////////////////////////////////////////////

//11. Encode an object into a query string
const params = {lat: 45, lng: 6, alt: 1000};

const queryString = Object.entries(params).map(p => encodeURIComponent(p[0]) + '=' + encodeURIComponent(p[1])).join('&')

// queryString is "lat=45&lng=6&alt=1000"


/////////////////////////////////////////////////////////////
//12. Print a table of users as a readable string only with specified keys
//Sometimes you want to print your array of objects with selected keys as a string, but you realize that JSON.stringify is not that great ?

const users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

users.map(({id, age, group}) => `\n${id} ${age} ${group}`).join('')

// it returns:
// "
// 11 23 editor
// 47 28 admin
// 85 34 editor
// 97 28 admin

//JSON.stringify can make the string output more readable, but not as a table:

JSON.stringify(users, ['id', 'name', 'group'], 2);

// it returns:
// "[
//   {
//     "id": 11,
//     "name": "Adam",
//     "group": "editor"
//   },
//   {
//     "id": 47,
//     "name": "John",
//     "group": "admin"
//   },
//   {
//     "id": 85,
//     "name": "William",
//     "group": "editor"
//   },
//   {
//     "id": 97,
//     "name": "Oliver",
//     "group": "admin"
//   }
// ]"


/////////////////////////////////////////////////////////////


//13. Find and replace a key-value pair in an array of objects
//Let’s say we want to change John’s age. If you know the index, you can write this line: users[1].age = 29. However, let’s take a look at another way of doing it:

const updatedUsers = users.map(
  p => p.id !== 47 ? p : {...p, age: p.age + 1}
);

// John is turning 29 now

// Here instead of changing the single item in our array, we create a new one with only one element different. Now we can compare our arrays just by reference like updatedUsers == users which is super quick! React.js uses this approach to speed up the reconciliation process

/////////////////////////////////////////////////////////////


//14. Union (A ∪ B) of arrays
//Less code than importing and calling the lodash method union.

const arrA = [1, 4, 3, 2];
const arrB = [5, 2, 6, 7, 1];

[...new Set([...arrA, ...arrB])]; // returns [1, 4, 3, 2, 5, 6, 7]

/////////////////////////////////////////////////////////////

//15. Intersection (A ∩ B) of arrays
//The last one!

const arrAA = [1, 4, 3, 2];
const arrBB = [5, 2, 6, 7, 1];

arrAA.filter(it => arrBB.includes(it)); // returns [1, 2]
