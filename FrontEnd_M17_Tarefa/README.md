# Pet&Style | Catálogo de produtos (M17 · React)

Catálogo de produtos em React com Vite: componentes por props, estado com `useState`, formulário controlado e `useEffect` com carregamento simulado.

## Como rodar

```
npm install
npm run dev
```

Para gerar a versão de produção: `npm run build`.

## Estrutura

- `src/pages/Catalogo.jsx`: página; guarda a lista no state e simula a carga inicial com `useEffect` + `setTimeout`.
- `src/components/ProdutoCard.jsx`: card que recebe nome, preço, imagem e descrição por props.
- `src/components/FormProduto.jsx`: formulário controlado (nome, preço e descrição obrigatórios).
- `src/components/Carregando.jsx`: mensagem "Carregando produtos…" com esqueletos.
- `src/data/produtos.js`: dados mockados.
- `src/assets/`: imagens.
- `src/styles/`: SCSS (BEM, mobile-first, tema claro/escuro automático).


