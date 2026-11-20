import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";
import styles from './TodoList.module.css';

const MENSAGENS = {
    todas: 'Nenhuma tarefa ainda. Adicione a primeira acima.',
    pendentes: 'Nenhuma tarefa pendente.',
    concluidas: 'Nenhuma tarefa concluída.',
};

function TodoList() {

    const { tarefasFiltradas, filtro, alternar, remover } = useContext(TodoContext);

    if (tarefasFiltradas.length === 0) {
        return <p className={styles.vazio}>{MENSAGENS[filtro]}</p>
    }

    return (
        <ul className={styles.list}>
            {tarefasFiltradas.map(tarefa => (
                <TodoItem
                    key={tarefa.id}
                    id={tarefa.id}
                    texto={tarefa.texto}
                    concluida={tarefa.concluida}
                    onAlternar={alternar}
                    onRemover={remover}
                />
            ))}
        </ul>
    )
}
export default TodoList;
