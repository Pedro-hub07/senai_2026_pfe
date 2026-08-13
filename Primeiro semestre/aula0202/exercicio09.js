const prompt = require('prompt-sync')();
let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("Digite o segundo número: "));
let operacao = prompt("Digite o caractere de uma das 4 operações (+ - * /): ");
const op = (n1, n2, operacao) => {
    if (operacao === '+') {
        console.log('A soma é: ' + (n1 + n2));
    } else if (operacao === '-') {
        console.log('A subtração é: ' + (n1 - n2));
    } else if (operacao === '*') {
        console.log('A multiplicação é: ' + (n1 * n2));
    } else {
        console.log('A divisão é: ' + (n1 / n2));
    }
}
op(n1, n2, operacao);