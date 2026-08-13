const corpo = document.querySelector('body')
const titulo = document.querySelector('.titulo')
const container = document.querySelector('#container')

corpo.style.backgroundColor = '#c917ed';
corpo.style.color = '#fff';
titulo.textContent = 'Adicionando elementos via JS';
container.style.width = '94%';
container.style.margin = '0 auto';
container.style.backgroundColor = '#ffbe1a'

let anuncio = '<h2>Curso dev com IA - Novidade!!! </h2>'
container.innerHTML += anuncio
//imagem.revomeAttribute

//adicionando classes
imagem.classList.add("Imagem");