
import './App.css'
import { useState } from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Display from './components/Display';
import Canvas from './components/Canvas';

function App() {
  const [view, setView] = useState(<Canvas />);
  

//  const changeDisplay = () => {
//     setIsBook(!isBook);
//     console.log(isBook)
//   }



  return (
    <>
    <Header />
    <section className='h-screen w-screen'>
      <Display view={view} />
      <Navbar setView={setView} />
    </section>
    </>
  )
}

export default App
