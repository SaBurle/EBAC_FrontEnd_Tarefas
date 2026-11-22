import { atom } from 'recoil';

// Atomo com o filtro ativo: 'todas' | 'concluidas' | 'pendentes'
export const filtroState = atom({
    key: 'filtroState',
    default: 'todas'
})
