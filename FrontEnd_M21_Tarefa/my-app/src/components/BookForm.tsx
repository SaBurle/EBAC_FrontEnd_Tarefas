import { useState } from "react";
import axios from "axios";
import type { Book } from "../tipos/Book";
import styles from './BookForm.module.css';

const API_URL = import.meta.env.VITE_API_URL;

type Props = {
    aoAdicionar: (book: Book) => void;
}

const BookForm = ({ aoAdicionar } : Props) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [status, setStatus] = useState<Book['status']>('Não lido');

    const enviar = async (e: React.SubmitEvent) => {
        e.preventDefault();

        if(!title || !author) return;

        try {
            const resposta = await axios.post<Book>(API_URL, { tipo: 'livro', title, author, status });
            aoAdicionar(resposta.data);
            setTitle('');
            setAuthor('');
            setStatus('Não lido');
        } catch (erro) {
            console.error('Erro ao adicionar o livro:', erro);
        }
    }

    return(
        <form className={styles.formulario} onSubmit={enviar}>
            <h2>Adicionar Livro</h2>
            <input
                className={styles.input}
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <input
                className={styles.input}
                type="text"
                placeholder="Autor"
                value={author}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)}
            />
            <select
                className={styles.input}
                value={status}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value as Book['status'])}
            >
                <option value="Não lido">Não lido</option>
                <option value="Lido">Lido</option>
            </select>
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default BookForm;
