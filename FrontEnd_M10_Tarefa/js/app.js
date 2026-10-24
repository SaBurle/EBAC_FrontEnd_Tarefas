// Modularização (ES Modules)
import { Parquimetro } from './classes.js';
import {
    textoTroco, mostrarMensagem, atualizarTela, montarOpcoes, marcarOpcao,
    TEMAS, aplicarTema, lerTema,
} from './utils.js';

// POO: criar a instância (nome diferente do da classe)
const parquimetro = new Parquimetro();

// Estado da tela: tempo escolhido (null = nenhum)
let minutosEscolhidos = null;

// Se alguma regra recusar, o botão fica sem seleção e aparece o aviso
const escolherTempo = (minutos) => {
    const motivo = parquimetro.validar(minutos);
    minutosEscolhidos = motivo === '' ? minutos : null;
    marcarOpcao(minutosEscolhidos);
    mostrarMensagem(motivo, 'erro');
};

// Monta os botões de tempo e mostra o estado inicial
montarOpcoes(Parquimetro.TEMPOS, escolherTempo);
atualizarTela(parquimetro);

// Inserir saldo (formulário)
document.getElementById('formSaldo').addEventListener('submit', (evento) => {
    evento.preventDefault();

    // Pegar o valor digitado (em centavos)
    const campo = document.getElementById('valorSaldo');
    const centavos = Math.round(parseFloat(campo.value) * 100);

    // Campo vazio, zero ou negativo não passam nesta comparação
    if (!(centavos > 0)) {
        mostrarMensagem('Digite um valor maior que zero.', 'erro');
        return;
    }

    parquimetro.inserirSaldo(centavos);
    campo.value = '';
    mostrarMensagem('', 'dica');
    atualizarTela(parquimetro);
});

// Iniciar: confirma a compra do tempo escolhido
document.getElementById('btnIniciar').addEventListener('click', () => {
    if (minutosEscolhidos === null) {
        mostrarMensagem('Escolha um tempo antes de iniciar.', 'erro');
        return;
    }

    const minutos = minutosEscolhidos;
    const motivo = parquimetro.comprar(minutos);
    minutosEscolhidos = null;
    marcarOpcao(null);
    atualizarTela(parquimetro);

    if (motivo !== '') {
        mostrarMensagem(motivo, 'erro');
        return;
    }
    mostrarMensagem(
        `Tempo adicionado: ${minutos} min. ${textoTroco(parquimetro.saldo, 'Saldo restante (troco)')}.`,
        'ok'
    );
});

// Finalizar: zera o tempo e devolve o troco
document.getElementById('btnFinalizar').addEventListener('click', () => {
    const troco = parquimetro.finalizar();
    minutosEscolhidos = null;
    marcarOpcao(null);
    atualizarTela(parquimetro);
    mostrarMensagem(`Estacionamento finalizado. ${textoTroco(troco, 'Troco devolvido')}.`, 'ok');
});

// Botão de tema
aplicarTema(lerTema());
document.getElementById('btn-tema').addEventListener('click', () => {
    const atual = document.documentElement.getAttribute('data-theme') || 'auto';
    aplicarTema(TEMAS[(TEMAS.indexOf(atual) + 1) % TEMAS.length]);
});
