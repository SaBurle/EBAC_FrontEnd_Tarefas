import { useEffect, useState } from "react";

// Hook customizado: um useState que fica salvo no localStorage
export function useLocalStorage(chave, valorInicial){
    const [valor, setValor] = useState(() => {
        try {
            const salvo = localStorage.getItem(chave);
            return salvo !== null ? JSON.parse(salvo) : valorInicial;
        } catch {
            return valorInicial;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(chave, JSON.stringify(valor));
        } catch {
            // sem storage: os dados valem só nesta visita
        }
    }, [chave, valor]);

    return [valor, setValor];
}
