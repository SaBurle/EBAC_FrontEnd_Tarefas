import { useEffect } from "react";
import axios from "axios";
import type { Book } from "../tipos/Book";
import BookItem from "./BookItem";

const API_URL = import.meta.env.VITE_API_URL;

type Props = {
    books : Book[];
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
    aoRemover: (id: string) => void;
}

const BookList = ({ books, setBooks, aoRemover } : Props) => {

    useEffect(() => {
        const buscarLivros = async () => {
            try {
                const resposta = await axios.get<Book[]>(API_URL, { params: { tipo: 'livro' } });
                setBooks(resposta.data);
            } catch (erro) {
                console.error('Erro ao buscar os livros:', erro);
            }
        }

        buscarLivros();
    }, [setBooks])

    if(books.length === 0)
        return <p>Nenhum livro foi cadastrado.</p>

    return (
        <div>
            {
                books.map(book => (<BookItem key={book.id} book={book} aoRemover={aoRemover}/>))
            }
        </div>
    )
}

export default BookList;
