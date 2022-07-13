//arr to obj => give us dictionary => key ='id', value=obj

const arr = [
  { id: "1", name: "dori" },
  { id: "4", name: "matan" },
  { id: "3", name: "roei" },
  { id: "2222", name: "alon" },
];

//insert the item
// const mappingToKey = arr.reduce((obj,item) => {
//   obj[item['id']] = item;
//   return obj;
// },{});

//insert the item with new property inside obj
// const mappingToKey = arr.reduce((obj,item) => {
//   const temp = {item:item, lastName:"lol"};
//   obj[item['id']] = temp;
//   return obj;
// },{});

//insert the item with new property inside the item
// const mappingToKey = arr.reduce((obj,item) => {
//   item.lastName="lol";
//   obj[item['id']] = item;
//   return obj;
// },{});

console.log(mappingToKey);

// console.log(mappingToKey['4'].item);

// console.log(mappingToKey['3']);

// ***********************************************************

let data = [
  { id: 1, country: "Germany", population: 83623528 },
  { id: 2, country: "Austria", population: 8975552 },
  { id: 3, country: "Switzerland", population: 8616571 },
];

let dictionary = Object.assign({}, ...data.map((x) => ({ [x.id]: x.country })));
// {1: "Germany", 2: "Austria", 3: "Switzerland"}

console.log(dictionary);
