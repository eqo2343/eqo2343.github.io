import React from 'react'
import Card from './Card'
import Dropdown from './Dropdown'
import './Navbar.css'

const Navbar = ({ onChange }) => {

  const handler = () => {
    onChange();
  }

  return (
    <nav className='flex gap-4 flex-col'>
        <Dropdown id="drop" />
        <Card id='navCard' onClick={handler} >
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