import { atom } from 'recoil';

// Atomo com a lista de tarefas: { id, texto, concluida }
export const tarefasState = atom({
    key: 'tarefasState',
    default: []
})
