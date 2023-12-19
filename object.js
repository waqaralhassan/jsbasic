// const arr = [1, 2, 3];

// const myMethod = function (arg) {
//   console.log(arguments);
//   console.log(arguments.length > 0 ? this[arg] : this);
// }.bind(arr);

// // arr.myMethod();
// // setTimeout(arr.myMethod, 1, 1);
// // setTimeout(() => {
// //   arr.myMethod(1);
// // }, 1);
// console.log(this);
// myMethod();

// ---------------------OBJECT------------------------

const person = {
  firstName: "abrar",
  lastName: "zahid",
  age: 32,
  skills: ["electrical", "frontend"],
  test: {
    test1: "test21",
    test2: "test2",
  },
  //   method:
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// const jsonPerson = JSON.stringify(person);
// console.log(jsonPerson);
// console.log(person);
// console.log("--------------");
// person.firstName = "abc";
// person.xyz = "gggg"; // option ignore | key xyz: "gggg"
// console.log(person);
// const fullName = person.fullName();
// console.log(fullName);
// console.log(person.fullName());

// ----------------------problem associated with mutable type of data-----------------------------
// const person2 = person;
// person2.firstName = "abc";
// console.log(person2);
// console.log("------------------");
// console.log(person);

// -------------------remedy: copy the object instead of mere equal to-------------------------

const person2 = {
  ...person,
};
person2.firstName = "abc";
console.log(person.firstName, person2.firstName);
const name = person2.fullName();
console.log(name);
