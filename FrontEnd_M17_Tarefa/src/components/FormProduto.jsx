import { useState } from 'react'
import imagemPadrao from '../assets/produto-padrao.svg'

const CAMPOS_VAZIOS = { nome: '', preco: '', descricao: '' }

// crypto.randomUUID só existe em contexto seguro (https ou localhost).
const gerarId = () =>
  globalThis.crypto?.randomUUID
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`

// Aceita "24,90", "1.299,90" e "24.90".
function converterPreco(texto) {
  const limpo = texto.trim().replace(/\s/g, '')
  const normalizado = limpo.includes(',')
    ? limpo.replace(/\./g, '').replace(',', '.')
    : limpo
  return Number(normalizado)
}

function validar({ nome, preco, descricao }) {
  const erros = {}
  if (nome.trim() === '') erros.nome = 'Informe o nome do produto.'
  if (preco.trim() === '') {
    erros.preco = 'Informe o preço.'
  } else if (!(converterPreco(preco) > 0)) {
    erros.preco = 'Informe um preço válido, maior que zero. Exemplo: 24,90.'
  }
  if (descricao.trim() === '') erros.descricao = 'Informe a descrição.'
  return erros
}

function FormProduto({ onAdicionar }) {
  const [campos, setCampos] = useState(CAMPOS_VAZIOS)
  const [erros, setErros] = useState({})
  const [adicionado, setAdicionado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setCampos((atuais) => ({ ...atuais, [name]: value }))
    setAdicionado(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault() // evita recarregar a página
    const novosErros = validar(campos)
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) {
      setAdicionado(false)
      return
    }
    onAdicionar({
      id: gerarId(),
      nome: campos.nome.trim(),
      preco: converterPreco(campos.preco),
      descricao: campos.descricao.trim(),
      imagem: imagemPadrao,
    })
    setCampos(CAMPOS_VAZIOS)
    setAdicionado(true)
  }

  return (
    <form className="formulario" onSubmit={handleSubmit} noValidate>
      <div className={`campo${erros.nome ? ' campo--erro' : ''}`}>
        <label className="campo__rotulo" htmlFor="nome">Nome do produto</label>
        <input
          className="campo__entrada"
          id="nome"
          name="nome"
          type="text"
          value={campos.nome}
          onChange={handleChange}
          required
          aria-invalid={Boolean(erros.nome)}
          aria-describedby={erros.nome ? 'erro-nome' : undefined}
        />
        {erros.nome && <p className="campo__erro" id="erro-nome">{erros.nome}</p>}
      </div>

      <div className={`campo${erros.preco ? ' campo--erro' : ''}`}>
        <label className="campo__rotulo" htmlFor="preco">Preço (R$)</label>
        <input
          className="campo__entrada"
          id="preco"
          name="preco"
          type="text"
          inputMode="decimal"
          placeholder="Ex.: 24,90"
          value={campos.preco}
          onChange={handleChange}
          required
          aria-invalid={Boolean(erros.preco)}
          aria-describedby={erros.preco ? 'erro-preco' : undefined}
        />
        {erros.preco && <p className="campo__erro" id="erro-preco">{erros.preco}</p>}
      </div>

      <div className={`campo${erros.descricao ? ' campo--erro' : ''}`}>
        <label className="campo__rotulo" htmlFor="descricao">Descrição</label>
        <textarea
          className="campo__entrada campo__entrada--area"
          id="descricao"
          name="descricao"
          rows="3"
          value={campos.descricao}
          onChange={handleChange}
          required
          aria-invalid={Boolean(erros.descricao)}
          aria-describedby={erros.descricao ? 'erro-descricao' : undefined}
        />
        {erros.descricao && (
          <p className="campo__erro" id="erro-descricao">{erros.descricao}</p>
        )}
      </div>

      <button className="botao" type="submit">Adicionar produto</button>

      <p className="formulario__aviso" role="status">
        {adicionado && 'Produto adicionado! Ele aparece no início da lista.'}
      </p>
    </form>
  )
}

export default FormProduto
