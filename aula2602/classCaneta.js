class Caneta{
    cor = 'Amarelo';
    marca = 'Faber Castel';
    ponta = 'Fina';
    qtdtinta = 5;
    tampa = false;

    escrever(){
        return 'Começou a escrever';
    }
    sublinhar(valor){
        if(valor > this.qtdtinta){
            return 'insuficiente'
        }else{
          this.qtdtinta -= valor;
        return 'Quantidade restante de tinta: '+ this.qtdtinta +' ml'  
        }
    }
}
const canetafina = new Caneta();
console.log(canetafina.escrever());
console.log(canetafina.sublinhar(6));