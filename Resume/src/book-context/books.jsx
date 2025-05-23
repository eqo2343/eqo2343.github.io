import { createContext, useState } from 'react';
import axios from 'axios';
import Canvas from '../components/Canvas';
import BookList from '../book-components/BookList';
import BookCreate from '../book-components/BookCreate';
import BookShow from '../book-components/BookShow';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const [isGames, setIsGames] = useState(true);
  const [isBooks, setIsBooks] = useState(false);
  const [display, setDisplay] = useState(
  <div className="app flex flex-col gap-20">
    <div className='flex p-4 mt-4'>
      <h1>Reading List</h1>
    </div>
    <div className=' w-350 h-200 '>
      <BookList />
    </div>
    <div>
      <BookCreate />
    </div>
  </div>)

  const changeToGames = () => {
    setIsBooks(false),
    setIsGames(true);
  }

  const changeToBooks = () => {
    setIsBooks(true),
    setIsGames(false);
}

const resetDisplay = () => {
  setDisplay(<Canvas />)
}

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };



  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
    changeToBooks,
    changeToGames,
    isGames,
    setIsGames,
    isBooks,
    setIsBooks,
    display,
    setDisplay,
    resetDisplay

  };



  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
