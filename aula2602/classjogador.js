class Jogador {
    #nome;
    #numero;

    constructor(nome, numero) {
        this.#nome = nome;
        this.#numero = numero;
    }
    treinar() {
        return '3 vezes na semana';
    }
    getNome() {
        return this.#nome;
    }
    getNumero() {
        return this.#numero;
    }
}
// FUTEBOL
class JogadorFutebol extends Jogador {
    #peDominante;
    #totalGols;
    constructor(peDominante, totalGols, nome, numero) {
        super(nome, numero);
        this.#peDominante = peDominante;
        this.#totalGols = totalGols;
    }
    driblar() {
        return 'Tomou uma caneta';
    }
    fazerGol(qtsGols) {
        this.#totalGols += qtsGols;
        return this.#totalGols;
    }
    mostrar() {
        return 'O jogador ' + super.getNome() +
               ' número ' + super.getNumero() +
               ' pé dominante ' + this.#peDominante +
               ' tem ' + this.#totalGols + ' gols';
    }
}
const jogador = new JogadorFutebol('esquerdo', 480, 'Pedro', 18);
jogador.fazerGol(2);
console.log(jogador.mostrar());

// FUTEBOL AMERICANO
class JogadorFutebolAmericano extends Jogador {
    #listaJogadas;
    #jardasConquistadas;
    constructor(listaJogadas, jardasConquistadas, nome, numero) {
        super(nome, numero);
        this.#listaJogadas = listaJogadas;
        this.#jardasConquistadas = jardasConquistadas;
    }
    fazerTouchDown() {
        return "O jogador número " + super.getNumero() + " fez touchdown";
    }
    bloquear() {
        return "O jogador realizou um bloqueio";
    }
    correrJardas(valor) {
        this.#jardasConquistadas += valor;
        return this.#jardasConquistadas;
    }
}
const jogadorFA = new JogadorFutebolAmericano(
    ["corrida", "passe"],
    120,
    "Carlos",
    89
);

console.log(jogadorFA.fazerTouchDown());

// BASQUETE
class JogadorBasquete extends Jogador {
    #alturaSalto;
    #totalCestas;

    constructor(alturaSalto, totalCestas, nome, numero) {
        super(nome, numero);
        this.#alturaSalto = alturaSalto;
        this.#totalCestas = totalCestas;
    }

    arremessar() {
        return "O jogador " + super.getNome() +
               " número " + super.getNumero() +
               " arremessou a bola";
    }

    fazerEnterrada() {
        this.#totalCestas++;
        return "Enterrada realizada!";
    }
}
const jogadorBasquete = new JogadorBasquete(
    0.85,
    30,
    "Lucas",
    23
);
console.log(jogadorBasquete.arremessar());