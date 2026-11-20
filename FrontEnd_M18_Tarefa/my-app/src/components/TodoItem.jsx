import { memo } from "react";
import styles from './TodoItem.module.css';

function TodoItem({ id, texto, concluida, onAlternar, onRemover }) {

    // Para conferir o React.memo: marcar uma tarefa renderiza só ela
    console.log("Componente item executado.", texto);

    return (
        <li className={styles.item}>
            <label className={styles.rotulo}>
                <input type="checkbox" checked={concluida} onChange={() => onAlternar(id)}/>
                <span className={concluida ? styles.concluida : ''}>{texto}</span>
            </label>
            <button
                className={`${styles.button} ${styles.alerta}`}
                onClick={() => onRemover(id)}
                aria-label={`Remover a tarefa ${texto}`}
            >
                Remover
            </button>
        </li>
    )
}
export default memo(TodoItem);
