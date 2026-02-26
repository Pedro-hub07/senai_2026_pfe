class livro{
    //atributos
    datadelancamento = '2013';
    autor = 'Eva Schloss';
    genero = 'biografia';
    nome = 'Depois de Auschiwtz';
    grupoeditora = 'Universo dos Livros';
    paginas = 304;
    tema = 'Memórias de sobrevivência e vida pós-guerra';
    preco = 38;

    //métodos
 ler(){
    console.log("Estou lendo");

    }
    mostrar(){
        console.log('O livro é: ' + this.nome + ' publicado em: ' + this.datadelancamento + ' do gênero: ' + this.genero + ' com o preço de: ' + this.preco + ' escrito por: ' + this.autor + ' o tema abordado é: ' + this.tema + ' contendo '+ this.paginas + ' paginas' )
    }
}

const livros = new livro();//instanciar a classe = criar o obejto
livros.ler();
livros.mostrar();