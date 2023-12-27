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

// const person2 = {
//   ...person,
// };
// person2.firstName = "abc";
// console.log(person.firstName, person2.firstName);
// const name = person2.fullName();

// ES6 sytnax : spread operator:
// let arr1 = [1, 2, 3, 4, 778, 080, 779, 808];
// let arr2 = [5, 6, 7, 8];

// let arr3 = [1, 2, 3, 4] + [5, 6, 7, 8]; // string concatinate

// let [firstNum, secNum, ...thirdNum] = [...arr1]; // rest operator
// console.log(firstNum, secNum, thirdNum);

// let testArr = [...arr1, ...arr2];
// console.log(testArr);

// let arr4 = [...arr1]; // copy through spread operator

// ----bad way of array concatination:
// let testArr = [];
// const arr1Len = arr1.length - 1;
// const arr2Len = arr2.length - 1;
// const arr3Len = arr1Len + arr2Len + 1;

// let temp = 0;
// for (let i = 0; i <= arr3Len; i++) {
//   if (i <= 3) {
//     testArr.push(arr1[i]);
//   } else {
//     testArr.push(arr2[temp]);
//     temp++;
//   }
// }
// console.log(testArr);

// reason for rest operator:
// let testarr1 = [1, 2, 3, 4, 5, 6, 7];
// let numFirst = testarr1[0];
// let numSec = testarr1[1];

// let tempArr = [];
// for (let i = 2; i <= testarr1.length - 1; i++) {
//   tempArr.push(testarr1[i]);
// }

// const [numFirst, numSec, ...tempArr] = testarr1;
// console.log(numFirst, numSec, tempArr);

// todo: employ rest operator in function call as well in func param:
// and concatination of objs via spread operator:

// const testFunc = (curialPara, ...params) => {
//   //rest operator
//   console.log("params ->", curialPara);
//   console.log("optional params ->", params);
// };

// testFunc(45.78, 78.98);

// 1- spread:
// use case of spread operator: swallow-copy:
let obj1 = {
  firstName: "abrar",
  lastName: "zahid",
};

const { firstName, lastName, age } = obj1; // desturcting
console.log("first name -> ", firstName);
console.log("first name -> ", lastName);
console.log("first name -> ", age);

// let obj2 = { ...obj1 };
// obj2.firstName = "ttt";
// console.log("obj1 ->", obj1);
// console.log("obj2 ->", obj2);

// use case 2 concatination:
// let obj3 = {
//   profession: "engineer",
//   0: "testing",
// };
// let concatObj = { ...obj1, ...obj3 };
// console.log(concatObj, concatObj[0]);
