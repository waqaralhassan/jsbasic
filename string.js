const str = "testisy";

console.log(str.length);
console.log(str[0]);

const modifiedStr = str.slice(0, 4);
console.log("sliced string -> ", modifiedStr);
console.log(modifiedStr.length, str);

const negaitveStr = str.slice(2, -2);
console.log("negativeTest->", negaitveStr);

const subStr = str.substring(3, 1);
console.log("subStr ->", subStr);
