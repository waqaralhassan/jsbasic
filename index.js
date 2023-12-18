import req from "./input.json" assert { type: "json" };
import {
  addfunction,
  subfunction,
  mulfunction,
  divfunction,
} from "./functions.js";

for (let i = 0; i < req.operations.length; i++) {
  if (req.operations[i] === "addition") {
    let x = addfunction(req.firstNumber, req.secondNumber);
    console.log("result for addition is: ", x);
  } else if (req.operations[i] === "multiplication") {
    let x = mulfunction(req.firstNumber, req.secondNumber);
    console.log("result for multiplication is: ", x);
  } else if (req.operations[i] === "subtraction") {
    let x = subfunction(req.firstNumber, req.secondNumber);
    console.log("resul for subtraction ist: ", x);
  } else if (req.operations[i] === "division") {
    let x = divfunction(req.firstNumber, req.secondNumber);
    console.log("result for division: ", x);
  } else {
    console.log("error....");
  }
}
