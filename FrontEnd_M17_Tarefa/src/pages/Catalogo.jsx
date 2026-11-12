import { useEffect, useState } from 'react'
import Carregando from '../components/Carregando'
import FormProduto from '../components/FormProduto'
import ProdutoCard from '../components/ProdutoCard'
import { produtosIniciais } from '../data/produtos'

const ATRASO_CARGA_MS = 1500

function Catalogo() {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)

  // Simula a carga inicial (como seria uma chamada a uma API).
  useEffect(() => {
    const espera = setTimeout(() => {
      setProdutos((atuais) => [...atuais, ...produtosIniciais])
      setCarregando(false)
    }, ATRASO_CARGA_MS)

    return () => clearTimeout(espera) // limpeza ao desmontar
  }, [])

  const adicionarProduto = (novo) => {
    setProdutos((atuais) => [novo, ...atuais])
  }

  return (
    <main>
      <section className="secao" id="produtos" aria-labelledby="titulo-produtos">
        <div className="conteudo">
          <h2 className="secao__titulo" id="titulo-produtos">Nossos produtos</h2>
          {carregando ? (
            <Carregando />
          ) : (
            <ul className="grade">
              {produtos.map((produto) => (
                <li key={produto.id}>
                  <ProdutoCard
                    nome={produto.nome}
                    preco={produto.preco}
                    imagem={produto.imagem}
                    descricao={produto.descricao}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section
        className="secao secao--destaque"
        id="cadastro"
        aria-labelledby="titulo-cadastro"
      >
        <div className="conteudo">
          <h2 className="secao__titulo" id="titulo-cadastro">Cadastrar produto</h2>
          <p className="secao__texto">Preencha os campos para incluir um novo item no catálogo.</p>
          <FormProduto onAdicionar={adicionarProduto} />
        </div>
      </section>
    </main>
  )
}

export default Catalogo
