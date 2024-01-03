let arr = [1, 2, 3, "abrar", "zahid"];
let arr2 = ["test"];
// console.log(arr.length); // last index: 3

// array elements are accessed by index:

// object:
// {
//     key: value,
// funcName: (param) => { functions which are part of an object are named methods
//     return
// }
// }

// objectName.funcName(param); method call/invocation

// console.log(arr.at(-1));
// console.log(arr.join(" "));
// console.log(arr.toString());
// console.log("arr -> ", arr); // dynamic array -> length of the array will change dynamically.
// const lastElement = arr.pop();
// console.log("new arr ->", arr);
// console.log("lastElement ->", lastElement);
// arr.push("temp");
// console.log("new arr ->", arr);
// arr.shift();
// console.log("new arr ->", arr);
// arr.unshift("test");
// console.log("new arr ->", arr);
// arr[0] = "67";
// console.log("new arr ->", arr);
// delete arr[0];
// console.log("new arr ->", arr);
// console.log(arr[0]);

// const arr3 = arr.concat(arr2);
// console.log(arr3);

// let arr4 = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(arr4, arr4.flat());

// let arr5 = [1, 2, 3, 4];
// arr5.splice(0, 1, "test1", "test2", "test3");
// const newArr = arr5.slice(0, 2); // the ending index's value will be excluded.
// console.log(arr5, newArr);

// methods iterator:
// [1, 2, 3, 'abrar']
let arr6 = [1, 2, 3, "abrar", "zahid"];
let counter = 0;

let callback = (i) => {
  counter++;
  return console.log(i);
};

const newArr = arr6.map(callback);

console.log("counter ->", counter);
