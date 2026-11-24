# Catálogo de Livros (M21 · TypeScript com React)

Tarefa do módulo 21: catálogo de livros em React + TypeScript que lista, adiciona e remove livros de uma API.

> Feito com ajuda da IA Claude (Anthropic).
- crudcrud.com quebrou - fora de area.
- Foi utilizada a IA para me guiar com o `mockapi.io`.

## O que a aplicação faz
- Lista os livros da API (`BookList`, com `useEffect` e `axios.get`).
- Adiciona um livro com título, autor e status "Lido" / "Não lido" (`BookForm`, com `axios.post`).
- Remove um livro (`BookItem`, com `axios.delete`).
- Erros de requisição tratados com `try/catch`.

## Estrutura
- `src/tipos/Book.ts`: tipo `Book` (`id`, `title`, `author`, `status`).
- `src/components/BookList.tsx`, `BookForm.tsx` e `BookItem.tsx`: um componente para cada responsabilidade, com props tipadas.
- `src/App.tsx`: guarda o estado `books` e repassa aos componentes (state lifting).

## API: mockapi.io
- Foi usado o **mockapi.io** no lugar do crudcrud.com pedido no enunciado, porque o crudcrud saiu do ar.
- Recurso único `ebac`, usado por todas as tarefas do curso (no plano gratuito do mockapi.io o número de recursos é limitado).
- Para separar os dados de cada tarefa, todo registro tem o campo `tipo`. Nesta tarefa o valor é `livro`: o `POST` envia `tipo: 'livro'` e o `GET` busca só `?tipo=livro`.
- Campos usados nesta tarefa: `tipo`, `title`, `author` e `status`.
- A URL da API fica na variável `VITE_API_URL`, no arquivo `.env`.

## O que foi alterado em relação ao enunciado
- **crudcrud → mockapi.io:** muda a URL da API e o recurso passa a ser `ebac`, compartilhado com outras tarefas.
- **Campo `tipo`:** acrescentado (`livro`) para separar os livros dos registros de outras tarefas no mesmo recurso.
- **`_id` → `id`:** o mockapi.io devolve o identificador como `id`.
- **URL no `.env`:** em vez de escrever a URL no código, ela é lida com `import.meta.env.VITE_API_URL`. O `.env` não vai para o GitHub; o `.env.example` mostra o formato.
- **`try/catch` com `async/await`:** as chamadas usam `async/await`, como pede o passo 7 do enunciado.

## Como rodar
1. No mockapi.io, criar o recurso `ebac` (se ainda não existir) com os campos `tipo`, `title`, `author` e `status`.
2. Copiar `.env.example` para `.env` e preencher com a URL do recurso:
   `VITE_API_URL=https://<seu-projeto>.mockapi.io/api/v1/ebac`
3. Instalar e rodar:
```
npm install
npm run dev
```
