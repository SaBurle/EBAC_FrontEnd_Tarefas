import { useState } from 'react';
import CardProduto from './components/CardProduto';
import { Pagina, Titulo, Lista, Resumo, ResumoTitulo, ResumoLinha, Total } from './App.styles';

// Dados estáticos
const PRODUTOS = [
    { id: 1, nome: 'Fone de ouvido Bluetooth', preco: 189.9 },
    { id: 2, nome: 'Mouse sem fio', preco: 79.9 },
    { id: 3, nome: 'Teclado mecânico', preco: 299.0 },
    { id: 4, nome: 'Webcam Full HD', preco: 159.5 },
    { id: 5, nome: 'Suporte para notebook', preco: 89.0 },
    { id: 6, nome: 'Hub USB-C', preco: 129.9 },
];

function App() {

    // Só para mostrar a cor mudando: o clique alterna o "adicionado"
    // (não é um carrinho de verdade)
    const [adicionados, setAdicionados] = useState({ 1: true });

    const alternar = (id) => {
        setAdicionados({ ...adicionados, [id]: !adicionados[id] });
    }

    // Resumo: itens marcados e total somado
    const selecionados = PRODUTOS.filter(produto => adicionados[produto.id]);
    const total = selecionados.reduce((soma, produto) => soma + produto.preco, 0);
    const totalFormatado = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <Pagina>
            <Titulo>Produtos</Titulo>
            <Lista>
                {PRODUTOS.map(produto => (
                    <CardProduto
                        key={produto.id}
                        nome={produto.nome}
                        preco={produto.preco}
                        adicionado={!!adicionados[produto.id]}
                        onAlternar={() => alternar(produto.id)}
                    />
                ))}
            </Lista>

            <Resumo>
                <ResumoTitulo>Resumo</ResumoTitulo>
                <ResumoLinha>Itens selecionados: {selecionados.length}</ResumoLinha>
                <Total>Total: {totalFormatado}</Total>
            </Resumo>
        </Pagina>
    )
}

export default App
