const prompt = require('prompt-sync')();

let numero = Number(prompt("Digite um numero: "));
if (numero >= 90) {
    console.log("A");
} else if (numero >= 80 && numero < 90) {
    console.log("B");
} else if (numero >= 70 && numero < 80) {
    console.log("");
} else (numero < 60); {
    console.log("F");
}