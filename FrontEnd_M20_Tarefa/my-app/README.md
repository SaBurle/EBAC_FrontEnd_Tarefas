# To do List com Recoil

Tarefa do Módulo 20 (EBAC - Front End): lista de tarefas com estado global gerenciado pelo Recoil.

## O que faz
- Adicionar, concluir e remover tarefas
- Filtrar por todas, concluídas e pendentes
- Contador de tarefas no título
- Layout mobile-first (funciona de celular a desktop)

## Recoil
- `RecoilRoot` em `main.jsx`
- Átomos (`src/atoms`): lista de tarefas e filtro ativo
- Seletores (`src/selectors`): tarefas filtradas e total de tarefas
- Hooks: `useRecoilState` e `useRecoilValue`

## Estrutura
```
src/
  atoms/       tarefas.js, filtro.js
  selectors/   tarefasFiltradas.js, tarefasCount.js
  components/  FormTarefa, FiltroTarefas, ListaTarefas, Tarefa
```

## Como rodar
```
npm install
npm run dev
```

> Recoil exige React 18 (versão fixada em 18.3.1). Os dados não são persistidos (sem backend e sem localStorage), conforme o enunciado.
