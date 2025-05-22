import React, { useState, useEffect, useContext } from 'react'
import Card from './Card'
import Canvas from './Canvas'
import BookCreate from '../book-components/BookCreate';
import BookList from '../book-components/BookList';
import BooksContext from '../book-context/books.jsx';

const Display = () => {
  const [display, setDisplay] = useState(<Canvas />);
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  const changeDisplay = () => {
    setDisplay(<div className="app flex flex-col gap-20">
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
  }

  return (
    <main className='container '>
          <Card className='flex text-center w-full h-full rounded-4xl ring-2 ring-sky-300 items-center justify-center'>
            {display}
          </Card>
          <button onClick={changeDisplay}>Hi</button>
      </main>
  )
}

export default Display