const formatarPreco = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <article className="produto">
      <img
        className="produto__imagem"
        src={imagem}
        alt={nome}
        width="400"
        height="300"
        loading="lazy"
      />
      <div className="produto__corpo">
        <h3 className="produto__nome">{nome}</h3>
        <p className="produto__descricao">{descricao}</p>
        <p className="produto__preco">{formatarPreco(preco)}</p>
      </div>
    </article>
  )
}

export default ProdutoCard
