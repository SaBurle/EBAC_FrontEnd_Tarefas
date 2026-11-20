# CardProduto

Exercício do módulo **Estilos no React** (EBAC, Front End): componente `CardProduto` estilizado com **Styled Components**. 

## O que o app faz

- Mostra cards de produto com nome, preço e o botão "Adicionar ao carrinho"
- O botão muda de cor conforme a prop booleana `adicionado`:
  - `true`: verde (`#198754`)
  - `false`: cinza (`#6c757d`)
- Abaixo dos cards, um resumo mostra a quantidade de itens selecionados e o total somado em reais
- Clicar no botão alterna o `adicionado`, só para ver a cor mudando. Não é um carrinho de compras de verdade.

## Tecnologias

- React 19
- Vite
- Styled Components

## Estrutura

```
src/
  components/
    CardProduto/
      index.jsx    componente
      styles.jsx   estilos (Styled Components)
  App.jsx
  App.styles.jsx
  main.jsx
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).
