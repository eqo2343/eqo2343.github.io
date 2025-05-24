import React from 'react'
import Card from './Card';
import './Header.css'

const Header = ({ header }) => {

  

//   const handleChange = () => {
//     setIsGames(!isGames)
//   }
return (
  <div className='container w-120' >
      <header className=' w-full '>
              <Card className='ring-2 ring-sky-300' >
                {header}
              </Card>
            </header>
  </div>
)

}
export default Header