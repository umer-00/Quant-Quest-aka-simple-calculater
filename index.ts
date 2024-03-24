#! /usr/bin/env node

import inquirer from "inquirer";
// taking input from user using inquirer
console.log("\n\t Quant Quest aka simple calculater \n");
// taking input from user through inquirer

let answers = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one operater to perform operations",
    type: "list",
    name: "operater",
    choices: ["division", "multiplication", "addition", "subtraction"],
  },
]);
//  conditionl statements if-else

if (answers.operater === "division") {
  console.log(answers.firstNumber / answers.secondNumber);
} else if (answers.operater === "multiplication") {
  console.log(answers.firstNumber * answers.secondNumber);
} else if (answers.operater === "addition") {
  console.log(answers.firstNumber + answers.secondNumber);
} else if (answers.operater === "sebtraction") {
  console.log(answers.firstNumber - answers.secondNumber);
} else {
  console.log("invaid input");
}
