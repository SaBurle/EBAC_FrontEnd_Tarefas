// Funções utilitárias
const obterElemento = (id) => document.getElementById(id);

// Valores em centavos (inteiros) para evitar erros de arredondamento com R$ 1,75
export const formatarReais = (centavos) => `R$ ${(centavos / 100).toFixed(2).replace('.', ',')}`;

// Troco zerado vira "Sem troco"; senão mostra o rótulo e o valor
export const textoTroco = (centavos, rotulo) =>
    centavos === 0 ? 'Sem troco' : `${rotulo}: ${formatarReais(centavos)}`;

// Mostra uma mensagem na tela (tipo: 'dica', 'erro' ou 'ok')
export const mostrarMensagem = (texto, tipo) => {
    const elemento = obterElemento('mensagem');
    elemento.textContent = texto;
    elemento.className = `mensagem ${tipo}`;
};

// Atualizar interface (saldo e tempo disponível)
export const atualizarTela = (parquimetro) => {
    obterElemento('saldo').textContent = formatarReais(parquimetro.saldo);
    obterElemento('tempoDisponivel').textContent = parquimetro.minutos;
};

// Cria um botão para cada tempo da tabela do parquímetro (map)
export const montarOpcoes = (tempos, aoEscolher) => {
    const area = obterElemento('opcoes');
    const botoes = tempos.map(({ minutos, preco }) => {
        const botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'opcao';
        botao.dataset.minutos = minutos;
        botao.setAttribute('aria-pressed', 'false');
        botao.innerHTML = `${minutos} min<small>${formatarReais(preco)}</small>`;
        botao.addEventListener('click', () => aoEscolher(minutos));
        return botao;
    });
    botoes.forEach((botao) => area.appendChild(botao));
};

// Marca o botão escolhido (null = nenhum)
export const marcarOpcao = (minutos) => {
    document.querySelectorAll('.opcao').forEach((botao) => {
        const marcado = Number(botao.dataset.minutos) === minutos;
        botao.setAttribute('aria-pressed', String(marcado));
    });
};

// Tema: auto -> claro -> escuro (guarda a escolha no navegador)
export const TEMAS = ['auto', 'light', 'dark'];
const nomesTema = { auto: 'auto', light: 'claro', dark: 'escuro' };

export const aplicarTema = (tema) => {
    const botaoTema = obterElemento('btn-tema');
    if (tema === 'auto') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', tema);
    }
    botaoTema.textContent = `Tema: ${nomesTema[tema]}`;
    try {
        localStorage.setItem('tema', tema);
    } catch (erro) {
        // sem armazenamento: a escolha vale só até recarregar
    }
};

export const lerTema = () => {
    try {
        const salvo = localStorage.getItem('tema') || 'auto';
        return TEMAS.includes(salvo) ? salvo : 'auto';
    } catch (erro) {
        return 'auto';
    }
};
