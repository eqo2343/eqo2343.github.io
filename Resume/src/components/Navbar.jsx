import React from 'react'
import Card from './Card'
import Dropdown from './Dropdown'
import './Navbar.css'
import { useContext } from 'react'
import BooksContext from '../book-context/books'
import BookList from '../book-components/BookList';
import BookCreate from '../book-components/BookCreate'

const Navbar = ({ onChange }) => {

  const 
  { 
    fetchBooks,
    changeToBooks,
    changeToGames,
    isGames,
    setIsGames,
    isBooks,
    setIsBooks,
    changeDisplay,
    display,
    setDisplay
  } = useContext(BooksContext);


  const switchDisplay = () => {
    changeDisplay();
  }


  return (
    <nav className='flex gap-4 flex-col'>
        <Dropdown id="drop" />
        <Card id='navCard' onClick={switchDisplay} >
          Book Nook [REST]
        </Card>
        <Card id='navCard3' >
          Hardlee's App
        </Card>
        <Card id='navCard4' >
          About Me 
        </Card>

      </nav>
  )
}

export default Navbar