# todo-react-avancado

To do List em React feita como exercício do módulo **React avançado** (EBAC, Front End).

## O que o app faz

- Adicionar, concluir, remover e filtrar tarefas (todas, pendentes, concluídas)
- Limpar as tarefas concluídas
- Guardar a lista no navegador (`localStorage`), para ela continuar depois de recarregar a página

## Conceitos aplicados

- **Estado local:** `useState`
- **Estado global:** Context API (`createContext`, `TodoProvider` e `useContext`)
- **Hooks customizados:** `useInput` (controle do campo de texto) e `useLocalStorage` (persistência)
- **Memoization:** `React.memo` (`TodoItem` e `TodoFilters`), `useMemo` (lista filtrada, contadores e valor do contexto) e `useCallback` (ações do contexto)
- **Estilos:** CSS Modules, com abordagem mobile first

## Tecnologias

- React 19
- Vite
- CSS Modules

## Estrutura

```
src/
  components/   TodoForm, TodoFilters, TodoList e TodoItem (cada um com seu .module.css)
  contexts/     TodoContext.jsx (TodoContext e TodoProvider)
  hooks/        useInput.jsx e useLocalStorage.jsx
  App.jsx
  main.jsx
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção: `npm run build`.

## Como conferir o React.memo

Abra o console do navegador (F12). Ao marcar uma tarefa, aparece o aviso "Componente item executado." só para ela, e não para as outras.
