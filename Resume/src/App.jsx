
import './App.css'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Display from './components/Display';
import { useState } from 'react';

function App() {
    const [isGames, setIsGames] = useState(false);

    const onChange = () => {
      setIsGames(!isGames)
    }

  return (
    <>
    <Header isGames={isGames} />
    <section className='h-screen w-screen'>
      <Display onClick={onChange} />
      <Navbar onClick={onChange} />
    </section>
    </>
  )
}

export default App
