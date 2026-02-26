class Carro{
    //atributos
    modelo = 'aro 29';
    marca = 'BMX';
    cor = 'preto';
    velocidadeMaxima = 33;

    //métodos
 mover(){
    console.log("Estou me movendo");

    }
    mostrar(){
        console.log('O Carro é:' + this.modelo + '' + this.marca + '' + this.ano + '' + this.preco)
    }
}

const caminhonete = new Carro();//instanciar a classe = criar o obejto
caminhonete.mover();
caminhonete.mostrar();