import React from 'react'
import Card from './Card'
import Dropdown from './Dropdown'
import './Navbar.css'
import { useContext } from 'react'
import BooksContext from '../book-context/books'
import BookList from '../book-components/BookList';
import BookCreate from '../book-components/BookCreate'
import Hardlees from './Hardlees'
import AboutMe from './AboutMe'

const Navbar = () => {

  const { setDisplay } = useContext(BooksContext);


  const bookDisplay = () => {
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

  const hardleesDisplay = () => {
    setDisplay(<Hardlees />)
  }

  const aboutMeDisplay = () => {
    setDisplay(<AboutMe />)
  }



  return (
    <nav className='flex gap-4 flex-col'>
        <Dropdown id="drop" />
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