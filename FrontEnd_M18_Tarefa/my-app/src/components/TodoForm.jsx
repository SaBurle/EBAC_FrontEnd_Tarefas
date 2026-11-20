import { useContext, useState } from "react";
import { useInput } from "../hooks/useInput";
import { TodoContext } from "../contexts/TodoContext";
import styles from './TodoForm.module.css';

const LIMITE = 120;

function TodoForm() {

    const tarefa = useInput();
    const [erro, setErro] = useState('');
    const { adicionar } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const texto = tarefa.valor.trim();

        if (texto === '') {
            setErro('Digite o nome da tarefa.');
            return;
        }
        if (texto.length > LIMITE) {
            setErro(`Use até ${LIMITE} caracteres.`);
            return;
        }

        adicionar(texto);
        tarefa.limpar();
        setErro('');
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text"
                className={styles.input}
                placeholder="Digite uma nova tarefa"
                value={tarefa.valor}
                onChange={tarefa.onChange}/>
            <button className={styles.button} type="submit">Adicionar</button>
            {erro && <p className={styles.erro} role="alert">{erro}</p>}
        </form>
    )
}
export default TodoForm;
