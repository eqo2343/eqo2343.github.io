
import './App.css'
import { useState } from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Display from './components/Display';

function App() {
  const [isGames, setIsGames] = useState(true);

  const handleChange = () => {
    setIsGames(!isGames)
  }


  return (
    <>
    <Header />
    <section className='h-screen w-screen'>
      <Display />
      <Navbar />
    </section>
    </>
  )
}

export default App
