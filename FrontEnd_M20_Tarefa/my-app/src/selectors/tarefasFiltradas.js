import { selector } from 'recoil';
import { tarefasState } from '../atoms/tarefas';
import { filtroState } from '../atoms/filtro';

// Seletor que le a lista e o filtro e devolve as tarefas ja filtradas
export const tarefasFiltradasSelector = selector({
    key: 'tarefasFiltradasSelector',
    get: ({get}) => {
        const tarefas = get(tarefasState);
        const filtro = get(filtroState);

        switch (filtro) {
            case 'concluidas':
                return tarefas.filter(tarefa => tarefa.concluida);
            case 'pendentes':
                return tarefas.filter(tarefa => !tarefa.concluida);
            default:
                return tarefas;
        }
    }
})
