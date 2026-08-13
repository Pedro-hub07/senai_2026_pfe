const prompt = require("prompt-sync")();
let anodenasc = Number(prompt("Digite o seu ano de nascimento: "))
let idade = 2026 - anodenasc
console.log("Você tem " + idade + " anos de idade ")