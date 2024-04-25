#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    MYR: 4.78,
    SAR: 3.7,
    KRW: 1377,
    TRY: 32.56,
    PKR: 280
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Select the source currency:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "MYR", "SAR", "KRW", "TRY", "PKR"]
    },
    {
        name: "to",
        message: "Select the target currency:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "MYR", "SAR", "KRW", "TRY", "PKR"]
    },
    {
        name: "amount",
        message: "Enter Your Amount:",
        type: "number"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
