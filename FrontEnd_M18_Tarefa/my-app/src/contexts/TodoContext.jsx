import { createContext, useCallback, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodoContext = createContext();

export const FILTROS = {
    todas: 'Todas',
    pendentes: 'Pendentes',
    concluidas: 'Concluídas',
};

function gerarId() {
    return globalThis.crypto?.randomUUID?.() ?? String(Date.now() + Math.random());
}

export function TodoProvider({ children }) {

    const [tarefas, setTarefas] = useLocalStorage('todo-tarefas', []);
    const [filtro, setFiltro] = useState('todas');

    // useCallback: as funções não mudam entre renderizações,
    // então o React.memo do TodoItem funciona.
    const adicionar = useCallback((texto) => {
        setTarefas((atuais) => [{ id: gerarId(), texto, concluida: false }, ...atuais]);
    }, [setTarefas]);

    const alternar = useCallback((id) => {
        setTarefas((atuais) =>
            atuais.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t))
        );
    }, [setTarefas]);

    const remover = useCallback((id) => {
        setTarefas((atuais) => atuais.filter((t) => t.id !== id));
    }, [setTarefas]);

    const limparConcluidas = useCallback(() => {
        setTarefas((atuais) => atuais.filter((t) => !t.concluida));
    }, [setTarefas]);

    // useMemo: só recalcula quando tarefas ou filtro mudam
    const tarefasFiltradas = useMemo(() => {
        if (filtro === 'pendentes') return tarefas.filter((t) => !t.concluida);
        if (filtro === 'concluidas') return tarefas.filter((t) => t.concluida);
        return tarefas;
    }, [tarefas, filtro]);

    const contadores = useMemo(() => {
        const concluidas = tarefas.filter((t) => t.concluida).length;
        return {
            todas: tarefas.length,
            concluidas,
            pendentes: tarefas.length - concluidas,
        };
    }, [tarefas]);

    // useMemo no value: evita renderizar os consumidores à toa
    const value = useMemo(() => ({
        tarefasFiltradas, contadores, filtro, setFiltro,
        adicionar, alternar, remover, limparConcluidas,
    }), [tarefasFiltradas, contadores, filtro, adicionar, alternar, remover, limparConcluidas]);

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}
