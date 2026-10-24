// Classe Parquimetro: guarda as regras (saldo, tempo e limite)
export class Parquimetro {
    // Regras fixas
    static LIMITE_MINUTOS = 120;
    static TEMPOS = [
        { minutos: 30, preco: 100 },
        { minutos: 60, preco: 175 },
        { minutos: 120, preco: 300 },
    ];

    // Propriedades (encapsulamento com campos privados)
    #saldo = 0;
    #compras = []; // cada compra feita: { minutos, preco }

    // Cada regra diz quando a compra é recusada e qual mensagem mostrar
    #regras = [
        {
            recusa: (tempo) => this.minutos + tempo.minutos > Parquimetro.LIMITE_MINUTOS,
            mensagem: () => `Máximo de ${Parquimetro.LIMITE_MINUTOS} min de estacionamento.`,
        },
        {
            recusa: (tempo) => tempo.preco > this.#saldo,
            mensagem: (tempo) => `Saldo insuficiente para ${tempo.minutos} min.`,
        },
    ];

    // Métodos
    #buscarTempo(minutos) {
        return Parquimetro.TEMPOS.find((item) => item.minutos === minutos);
    }

    inserirSaldo(centavos) {
        this.#saldo += centavos;
    }

    // Devolve a mensagem da primeira regra que recusa a compra (vazio = tudo certo)
    validar(minutos) {
        const tempo = this.#buscarTempo(minutos);
        const regra = this.#regras.find((item) => item.recusa(tempo));
        return regra ? regra.mensagem(tempo) : '';
    }

    // Faz a compra: o que sobra no saldo é o troco
    comprar(minutos) {
        const motivo = this.validar(minutos);
        if (motivo !== '') {
            return motivo;
        }
        const tempo = this.#buscarTempo(minutos);
        this.#saldo -= tempo.preco;
        this.#compras.push(tempo);
        return '';
    }

    // Encerra o estacionamento: zera o tempo e devolve o saldo (troco)
    finalizar() {
        const troco = this.#saldo;
        this.#saldo = 0;
        this.#compras = [];
        return troco;
    }

    // Métodos getter
    get saldo() {
        return this.#saldo;
    }

    // Tempo disponível = soma dos minutos de todas as compras (reduce)
    get minutos() {
        return this.#compras.reduce((total, compra) => total + compra.minutos, 0);
    }
}
