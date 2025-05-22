import { useState, useContext } from 'react';
import BooksContext from '../book-context/books.jsx';
import BookEdit from './BookEdit';
import Card from '../components/Card';

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useContext(BooksContext);

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <Card className="book-show shadow-sky-500 flex items-center w-100 gap-4">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/100/100`} />
      <div className='flex flex-col gap-3'>
        <div className='text-3xl underline decoration-sky-400'>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>
            Edit
            </button>
            <button className="delete" onClick={handleDeleteClick}>
            Delete
            </button>
        </div>
      </div>
    </Card>
  );
}

export default BookShow;
