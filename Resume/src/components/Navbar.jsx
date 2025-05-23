import React, { useContext } from 'react'
import Card from './Card'
import Dropdown from './Dropdown'
import './Navbar.css'
import BookList from '../book-components/BookList';
import BookCreate from '../book-components/BookCreate'
import Hardlees from './Hardlees'
import AboutMe from './AboutMe'
import BooksContext from '../book-context/books';

const Navbar = ({ setView, onClick }) => {



  const bookDisplay = () => {
    onClick();
    setView(<div className="app flex flex-col gap-20">
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

  const hardleesDisplay = () => {
    setView(<Hardlees />)
  }

  const aboutMeDisplay = () => {
    setView(<AboutMe />)
  }



  return (
    <nav className='flex gap-4 flex-col'>
        <Dropdown setView={setView} onClick={onClick} id="drop" />
        <Card id='navCard' onClick={bookDisplay} >
          Book Nook [REST]
        </Card>
        <Card id='navCard3' onClick={hardleesDisplay} >
          Hardlee's App
        </Card>
        <Card id='navCard4' onClick={aboutMeDisplay} >
          About Me 
        </Card>

      </nav>
  )
}

export default Navbar