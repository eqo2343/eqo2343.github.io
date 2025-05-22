import React from 'react'
import Card from './Card'
import Dropdown from './Dropdown'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='flex gap-4 flex-col'>
        <Dropdown id="drop" />
        <Card id='navCard' >
          Book Nook [CRUD]
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