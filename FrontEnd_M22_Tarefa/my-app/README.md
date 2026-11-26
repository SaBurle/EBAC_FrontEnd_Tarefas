# Portal de Viagens (M22 · Next.js)

Tarefa do módulo 22 (Introdução ao Next.js): portal de viagens com rotas por arquivo, componentes reutilizáveis e CSS Modules.

## O que o portal faz
- Página inicial (`/`) com a apresentação do portal e um link para a lista de destinos.
- Página `/destinos` com 4 destinos turísticos, cada um em um card com imagem, nome e descrição.
- Menu de navegação com `next/link` entre `/` e `/destinos`.
- Cabeçalho e rodapé iguais em todas as páginas, pelo componente `Layout`.
- Layout mobile first: 1 coluna no celular, 2 no tablet e 4 no desktop.

## Estrutura
- `app/layout.tsx`: layout global, que usa o componente `Layout`.
- `app/page.tsx` e `app/destinos/page.tsx`: as duas rotas.
- `app/components/`: `Layout`, `Header`, `Footer`, `Title`, `Grid` e `CardDestino`, cada um com seu `.module.css`.
- `lib/destinos.js`: array local com os destinos (`id`, `nome`, `imagem`, `descricao`).
- `types/types.ts`: tipo `Destino`.
- `public/destinos/`: imagens em SVG.

## O que foi alterado em relação ao código das aulas
- **Tema:** de filmes (Cinelista) para destinos de viagem; `Card` virou `CardDestino`, com os campos `nome`, `imagem` e `descricao`.
- **Componente `Layout`:** novo, reúne `Header` e `Footer` e é usado no `app/layout.tsx`, como pede o enunciado.
- **Correções de digitação do código das aulas:** o `Header` fechava a `div` do container vazia (agora ela envolve o logo e o menu); o `Card` usava `imagem` sem tirá-la das props; as URLs das imagens usavam `>` em vez de `?`.
- **Sem Tailwind:** o projeto das aulas vinha com o Tailwind do `create-next-app`; aqui os estilos são só CSS Modules, como pede o enunciado.
- **Imagens:** ilustrações em SVG feitas para o portal, no lugar das imagens do `placehold.co`.

## Como rodar
```
npm install
npm run dev
```
Abra `http://localhost:3000`.
