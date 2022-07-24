import "./styles.css";

// for (var i = 0; i < 5; i++) {
//   function fn(i) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   fn(i);
// }
// //each one after 1 sec will print  the i // 01234

//*************************************** */

// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   })(i);
// }
// //each one after 1 sec will print  the i // 01234

//*************************************** */

// //good
// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }

// //each one after 1 sec will print  the i // 01234

// // with const .. (const i = 0; i < 5; i++)  will not work

//*************************************** */

// //not good
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 2000);
// }
// //each one after 2 sec will print 5 //55555

//*************************************** */

// //not good
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 2000);
// }
// //after 2 sec we get all 55555

const person1 = {
  name: "dori",
  age: 35,
  getFullName: function () {
    console.log(`${this.name} and ${this.age}`);
  },
};
const person2 = {
  name: "ordit",
  age: 33,
  getFullName: function () {
    console.log(`${this.name} and ${this.age}`);
  },
};

person1.getFullName(); //dori and 35 .. /this is pointer to person1
person2.getFullName(); //ordit and 33  ../this is pointer to person2

//*************************************** */

//why need to duplicate  getFullName ?.. we want to reuse the same getFullName and pointer to specific obj person

const person3 = {
  name: "dori",
  age: 35,
  getFullName: function (city = "defaultCity", country) {
    console.log(`${this.name} and ${this.age} and ${city} and ${country}`);
  },
};
const person4 = {
  name: "ordit",
  age: 33,
};

//we want to use getFullName in person3 and use it on person4 data mamber this

person3.getFullName.call(person4); //ordit and 33 and aa and undefined

person3.getFullName.call(person4, "yavne", "israel"); //ordit and 33 and yavne and israel

person3.getFullName.apply(person4, ["yavne"]); //ordit and 33 and yavne and undefined
person3.getFullName.apply(person4, ["yavne", "israel"]); //ordit and 33 and yavne and israel

//the diffrent between call and apply is that call get arguments as varible and apply get the argument as array

//*************************************** */
// now we want that getFullName function will be reuse in all the object

const getFullName = function (city, country) {
  let newCity = city || "defaultCity";
  let newcountry = country || "defaultCity";
  console.log(`${this.name} and ${this.age} and ${newCity} and ${newcountry}`);
};

const person5 = {
  name: "dori",
  age: 355,
};

const person6 = {
  name: "ordit",
  age: 333,
};

getFullName.call(person5); //dori and 355
getFullName.call(person6); //dori and 333
getFullName.call(person5, "yavneeeee"); //dori and 355 and yavneeeee and defaultCity
getFullName.apply(person5, ["yavneeeee", "israel"]); //dori and 355 and yavneeeee and israel

////*************************************** */
//now why bind ? because call and apply execute immediately and we want to excecute with handler because we want to check with if before execute or when we want to click with eventlistener

const person7 = {
  name: "dori",
  age: 676,
};

const handler = getFullName.bind(person7);
handler("ashdod");
handler("haifa", "israel");

//of inline excecute
getFullName.bind(person7)("ashdod", "israel");
// handler2("ashdod");
// handler2("haifa", "israel");

////*************************************** */
//self

const person9 = {
  name: "doriiiiiii",
  age: 999999,
  getFullName: function (city = "defaultCity", country) {
    var self = this;
    console.log(`${this.name} and ${this.age} and ${city} and ${country}`);
    (function () {
      // console.log(`${this.name} and ${this.age} and ${city} and ${country}`);//this will not work undefined
      console.log(`${self.name} and ${self.age} and ${city} and ${country}`);
      console.log(JSON.stringify(self)); //{"name":"doriiiiiii","age":999999}
      console.log(JSON.stringify(this)); //undefined
    })();
  },
};

person9.getFullName();
