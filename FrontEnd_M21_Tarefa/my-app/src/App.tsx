import { useState } from 'react';
import './App.css'
import BookForm from './components/BookForm'
import BookList from './components/BookList';
import type { Book } from './tipos/Book';

function App() {

  const [books, setBooks] = useState<Book[]>([])

  const adicionarLivro = (book: Book) => {
    setBooks(prev => [...prev, book])
  }

  const removerLivro = (id: string) => {
    setBooks(prev => prev.filter(book => book.id !== id))
  }

  return (
    <>
      <BookForm aoAdicionar={adicionarLivro}/>
      <BookList books={books} setBooks={setBooks} aoRemover={removerLivro}/>
    </>
  )
}

export default App
