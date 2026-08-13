const prompt = require("prompt-sync")();
let nota_aluno = prompt("Digite a nota da primeira atividade: ")
let divisao = nota_aluno / 2;
let pontuacao = divisao*divisao;
console.log("A pontuação do aluno é: " + pontuacao)