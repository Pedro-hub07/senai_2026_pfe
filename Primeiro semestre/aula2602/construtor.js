class Estudante{
    nome;
    #ra;
    #cpf;

    constructor(nome,ra,cpf){
        this.nome = nome;
        this.#ra = ra;
        this.#cpf = cpf;
    
    }
}
const Pedro = new Estudante('Pedro Venancio', 2637, 49201718896);
console.log(Pedro);
