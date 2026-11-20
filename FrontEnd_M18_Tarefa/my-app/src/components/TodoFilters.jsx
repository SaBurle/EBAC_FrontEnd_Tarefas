import { memo, useContext } from "react";
import { FILTROS, TodoContext } from "../contexts/TodoContext";
import styles from './TodoFilters.module.css';

function TodoFilters() {

    const { filtro, setFiltro, contadores } = useContext(TodoContext);

    return (
        <div className={styles.filtros}>
            {Object.entries(FILTROS).map(([chave, rotulo]) => (
                <button
                    key={chave}
                    className={filtro === chave ? `${styles.button} ${styles.ativo}` : styles.button}
                    onClick={() => setFiltro(chave)}
                >
                    {rotulo} ({contadores[chave]})
                </button>
            ))}
        </div>
    )
}
export default memo(TodoFilters);
