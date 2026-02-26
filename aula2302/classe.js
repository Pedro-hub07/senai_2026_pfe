class Carro{
    //atributos
    modelo = 'S10 cabine dupla';
    marca = 'Chevrolet';
    ano = 2025;
    preco = 200000;

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