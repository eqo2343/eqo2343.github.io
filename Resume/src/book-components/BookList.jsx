import { useContext } from 'react';
import BooksContext from '../book-context/books.jsx';
import BookShow from './BookShow';

function BookList() {
  const { books } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list flex flex-wrap flex-col h-200 p-2 gap-3">{renderedBooks}</div>;
}

export default BookList;