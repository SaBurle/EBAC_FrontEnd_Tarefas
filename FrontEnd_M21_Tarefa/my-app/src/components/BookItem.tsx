import axios from "axios";
import type { Book } from "../tipos/Book";

const API_URL = import.meta.env.VITE_API_URL;

type Props = {
    book : Book;
    aoRemover: (id: string) => void;
}

const BookItem = ({ book, aoRemover }: Props) => {

    const remover = async () => {
        try {
            await axios.delete(`${API_URL}/${book.id}`);
            aoRemover(book.id);
        } catch (erro) {
            console.error('Erro ao remover o livro:', erro);
        }
    }

    return(
        <div>
            <div>
                <strong>{book.title}</strong>
            </div>
            <p>{book.author} · {book.status}</p>
            <button onClick={remover}>Remover</button>
        </div>
    )
}

export default BookItem;
