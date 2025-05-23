import React, { useEffect, useContext } from 'react'
import Card from './Card'
import Canvas from './Canvas'
import BooksContext from '../book-context/books.jsx';

const Display = () => {
  
  const 
  { 
    fetchBooks,
    display,
   
  } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);




  return (
    <main className='container '>
          <Card className='flex text-center w-full h-full rounded-4xl ring-2 ring-sky-300 items-center justify-center'>
            {display}
          </Card>
      </main>
  )
}

export default Display