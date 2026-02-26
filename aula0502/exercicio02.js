const prompt = require("prompt-sync")();
let idade = prompt("Digite a sua idade: ")
if(idade >= 16 && idade < 18){
    console.log("Voce pode pegar livros emprestado")
}
else if(idade >= 18){
    console.log("Voce é maior de idade")
}