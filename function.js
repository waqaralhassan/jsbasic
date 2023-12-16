// // add func definition:
function testFunction2(arg) {
  console.log(`-> [testFunction] ${arg()}`); // callback
  return "this was a test";
}

// num1 and num2 does not exit:

// invoke add function (call):
// let testArg = { firstname: "waqar", lastname: "hassan" };
function testArg() {
  return "testing args";
}

let result = testFunction2(testArg);
console.log(`result: ${result}`);

// in javascript functions are FIRST CLASS CITIZEN.
// parameters and functions are treated as objects.
// functions can also return other functions in their return commands.
