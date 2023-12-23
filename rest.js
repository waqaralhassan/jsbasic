//string concqtination
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
//let arr3 = [1, 2, 3, 4, 5] + [5, 6, 7, 8, 9, 10]; // string concatinate incorrect method
//console.log(typeof arr1);
//console.log(arr3);
let arr3 = [...arr1, ...arr2];
console.log(arr3);
//usage of rest operator
let [firstNum, secNum, ...thirdNum] = arr1;
console.log(firstNum, secNum, thirdNum);
//rest operator usage in function
const func = (crucialpara, ...para) => {
  let x = 4;
  console.log(crucialpara, ...para);
};
let a = 4;
let b = 3 + 5;
func(3, 4, [a, b, [1, 2, 3 + 5]]);

// 1- spread:
// use case of spread operator: swallow-copy:
let obj1 = {
  firstName: "abrar",
  lastName: "zahid",
};

// let obj2 = { ...obj1 };
// obj2.firstName = "ttt";
// console.log("obj1 ->", obj1);
// console.log("obj2 ->", obj2);

// use case 2 concatination:
let obj3 = {
  profession: "engineer",
  0: "testing",
};
let concatObj = { ...obj1, ...obj3 };
console.log(concatObj, concatObj[0]);
