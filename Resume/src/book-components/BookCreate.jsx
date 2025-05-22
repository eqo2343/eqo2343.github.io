import { useState, useContext } from 'react';
import BooksContext from '../book-context/books.jsx';
import Card from '../components/Card';

function BookCreate() {
  const [title, setTitle] = useState('');
  const { createBook } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <Card className="book-create shadow-sky-500">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input border border-sky-400" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </Card>
  );
}

export default BookCreate;
