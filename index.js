import req from "./input.json" assert { type: "json" };
import {
  addfunction,
  subfunction,
  mulfunction,
  divfunction,
} from "./functions.js";

let x = addfunction(3, 4);
//console.log(`result is: ${x}`);
console.log(req);
