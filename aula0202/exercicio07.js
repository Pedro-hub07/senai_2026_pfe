const prompt = require('prompt-sync')();
let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite outro número: "));
if (num1 == 0 && num2 == 0) {
    console.log("Os dois números são iguais a zero.");
} else if (num1 == 0 || num2 == 0) {
    console.log("Um dos números é igual a zero.");
} else if (num1 > num2) {
    console.log("O primeiro número é maior.");
} else if (num2 > num1) {
    console.log("O segundo número é maior.");
} else {
    console.log("Os dois números são iguais.");
}