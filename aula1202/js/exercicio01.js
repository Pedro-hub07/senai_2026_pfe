const corpo = document.querySelector('body');
corpo.style.backgroundColor = '#ffe600';
corpo.style.color = '#8400c1';


const titulo = document.querySelector('.titulo');
titulo.textContent = 'Adicionando elemento via JS';

const container = document.querySelector('#container');
container.style.width = '94%';
container.style.margin = '0 auto';
container.style.backgroundColor = '#ff8cf9';

let anuncio = '<h2> Curso DEV com IA - Novidade!!! </h2>';
container.innerHTML += anuncio;

const imagem = document.querySelector('#imagem');

//adicionando atributos
imagem.setAttribute('src', './img/images.jpg');
// imagem.setAttribute('src', './images.jpg'); // Remove atributos

// Adicionando classes
imagem.classList.add('imagem');
const botao = document.querySelector('.botao')

// eventus
botao.addEventListener('click', () =>{
    alert('cliquei no botao' + contador++)

})
let contador= 0