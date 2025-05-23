
import './App.css'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Display from './components/Display';
import Canvas from './components/Canvas';
import { useState } from 'react';

function App() {
  const [view, setView] = useState(<Canvas />);  
  const [isGames, setIsGames] = useState(true);
  const [isHardlees, setIsHardlees] = useState(false);

    const onChange = () => {
      setIsGames(!isGames)
    }

    const changeHardlees = () => {
      setIsGames(false);
      setIsHardlees(true);
    }

  return (
    <>
    <Header isGames={isGames} />
    <section className='h-screen w-screen'>
      <Display onClick={onChange} view={view} />
      <Navbar onClick={onChange} setView={setView} />
    </section>
    </>
  )
}

export default App
