import React from 'react'
import Card from './Card';
import './Header.css'

const Header = ({ isGames }) => {
  

//   const handleChange = () => {
//     setIsGames(!isGames)
//   }

  return (
    <div className='container px-8' >
        <header>
                <Card className='ring-2 ring-sky-300' >
                  {isGames ? "Ej's Game Corner" : "Ej's Book Nook"}
                </Card>
              </header>
    </div>
  )
}

export default Header