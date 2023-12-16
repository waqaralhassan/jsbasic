// block - variable scope:
// block scopes are garbagly collected when the scope is finished.
{
  const x = 5;
}

let x = 56;
// bug x ->
x = [1, 2, 3];

// global scope:
// console.log(x);
//------------------------------------

// data - types:

// primitive types:
// strings, number, int, float, null, undefined, boolean.

// reference types:
// object, arrays.

// 1. arrays:
let arr = [1, 2, 3, 4];
let arr2 = ["1", "2", "3"];
let arr3 = [[1, 2, 4], [2], [3]];
let arr4 = [1, [1, 2, 3], "45"];

// access by index:
let firstValueOfAnArray = arr[0];
// console.log("arr2[0] -> ", firstValueOfAnArray);

// 2. Object: key value pairs: hash-map
let obj1 = { key1: [1, 2], key2: [1, 2], 32: "test3" };

// console.log("obj1[0] -> ", obj1["key1"] + obj1["key2"]);

let ar = [1, 2];
let ar2 = [1, 2];
let ar3 = ar + ar2;
// console.log(typeof ar3);

// string concatination:
let str1 = "12";
let str2 = 12;
let str3 = str1 + str2;
// console.log(str3);

// console.log(str3);
// let str4 = str1 + num;

let firtname = "john";
let age = 32;
let statment = `His name is ${firtname} and his age is ${age}`;
console.log(statment); // dynamic insersion in string.
