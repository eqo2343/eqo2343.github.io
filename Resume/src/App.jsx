
import './App.css'
import { useState } from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Display from './components/Display';

function App() {
  const [isBook, setIsBook] = useState(false);
  

 const changeDisplay = () => {
    setIsBook(!isBook);
    console.log(isBook)
  }



  return (
    <>
    <Header />
    <section className='h-screen w-screen'>
      <Display />
      <Navbar onChange={changeDisplay} />
    </section>
    </>
  )
}

export default App
