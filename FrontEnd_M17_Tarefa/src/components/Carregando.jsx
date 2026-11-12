const QUANTIDADE_ESQUELETOS = 4

function Carregando() {
  return (
    <div className="carregando" role="status">
      <p className="carregando__texto">Carregando produtos…</p>
      <ul className="grade" aria-hidden="true">
        {Array.from({ length: QUANTIDADE_ESQUELETOS }, (_, indice) => (
          <li key={indice} className="esqueleto">
            <div className="esqueleto__imagem" />
            <div className="esqueleto__corpo">
              <div className="esqueleto__linha esqueleto__linha--titulo" />
              <div className="esqueleto__linha" />
              <div className="esqueleto__linha esqueleto__linha--curta" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Carregando
