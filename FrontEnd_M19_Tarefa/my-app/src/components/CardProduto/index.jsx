import { Card, Nome, Preco, Botao } from "./styles";

function CardProduto({ nome, preco, adicionado = false, onAlternar }) {

    const precoFormatado = preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <Card>
            <Nome>{nome}</Nome>
            <Preco>{precoFormatado}</Preco>
            <Botao $adicionado={adicionado} aria-pressed={adicionado} onClick={onAlternar}>
                Adicionar ao carrinho
            </Botao>
        </Card>
    )
}
export default CardProduto;
