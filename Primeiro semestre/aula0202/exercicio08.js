const prompt = require('prompt-sync')();

let idade = Number(prompt("Digite a idade: "));
if (idade < 12) {
    console.log("Criança");
} else if (idade >= 12 && idade < 18) {
    console.log("Adolescente");
} else if (idade >= 18 && idade < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}