import { useContext } from 'react';
import { TodoContext, TodoProvider } from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import TodoFilters from './components/TodoFilters';
import TodoList from './components/TodoList';
import styles from './App.module.css';

function Rodape() {
    const { contadores, limparConcluidas } = useContext(TodoContext);

    return (
        <footer className={styles.rodape}>
            <p>{contadores.pendentes} pendente(s) de {contadores.todas}</p>
            <button
                className={styles.button}
                onClick={limparConcluidas}
                disabled={contadores.concluidas === 0}
            >
                Limpar concluídas
            </button>
        </footer>
    )
}

function App() {

    return (
        <TodoProvider>
            <main className={styles.main}>
                <h1 className={styles.title}>To do List</h1>
                <TodoForm />
                <TodoFilters />
                <TodoList />
                <Rodape />
            </main>
        </TodoProvider>
    )
}

export default App
