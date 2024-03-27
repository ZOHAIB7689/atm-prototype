#! /usr/bin/env node 

import inquirer from "inquirer";

let myBalance = 10000; //dollars
const Pincode = 1234;
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Please Enter your pin number",
    type: "number",
  },
]);
if (pinAnswer.pin === Pincode) {
  let operations = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select your operation", 
      type: "list",
      choices: ["withdraw", "check balance", "fastcash"],
    },
  ]);
  
 
  if (operations.operation === "withdraw") {
    let withdrawal = await inquirer.prompt([
      {
        name: "withdraw",
        message: "enter your amount",
        type: "number",
      },
    ]);
    console.log(withdrawal);

    console.log(
      "operation succesful your remaining balance is",
      (withdrawal.withdraw -= myBalance)
    );
  } else if (operations.operation === "fastcash") {
    let fastcash = await inquirer.prompt([
      {
        message: "select an amount",
        name: "cash",
        type: "list",
        choices: ["500", "1000", "3000", "5000", "10000"],
      },
    ]);
    if (fastcash.cash === "500") {
      console.log(
        "operation succesfull your remaining balace is ",
        fastcash.cash - myBalance
      );
    } else if (fastcash === "1000") {
      console.log(
        "operation succesfull your remaining balance is ",
        fastcash.cash - myBalance
      );
    } else if (fastcash.cash === "3000") {
      console.log(
        "operation succesfull your remaining balance is ",
        fastcash.cash - myBalance
      );
    } else if (fastcash.cash === "5000") {
      console.log(
        "operation succesfull your remaining balance is ",
        fastcash.cash - myBalance
      );
    } else if (fastcash.cash === "10000") {
      console.log(
        "operation succesfull your remaining balance is ",
        fastcash.cash - myBalance
      );
    }
    
  } else if (operations.operation === "check balance") {
    console.log("your balance is ", myBalance);
  }
} else {
  console.log("incorrect pincode");
}
