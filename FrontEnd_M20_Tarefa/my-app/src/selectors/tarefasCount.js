import { selector } from 'recoil';
import { tarefasState } from '../atoms/tarefas';

export const tarefasCountSelector = selector({
    key: 'tarefasCountSelector',
    get: ({get}) => {
        const tarefas = get(tarefasState);

        return tarefas.length;
    }
})
