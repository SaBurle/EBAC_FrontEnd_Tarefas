function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="conteudo cabecalho__conteudo">
        <a className="cabecalho__marca" href="#produtos">
          <span className="cabecalho__logo" aria-hidden="true">🐾</span>
          Pet&amp;Style
        </a>
        <nav aria-label="Principal">
          <ul className="cabecalho__lista">
            <li><a className="cabecalho__link" href="#produtos">Produtos</a></li>
            <li><a className="cabecalho__link" href="#cadastro">Cadastrar produto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho
