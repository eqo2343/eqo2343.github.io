import React, { useState, useEffect, useRef } from 'react'
import { GoChevronDown } from 'react-icons/go';
import Card from './Card';
import BooksContext from '../book-context/books'
import Canvas from './Canvas';
import Snake from './Snake';
import States from './States';

const Dropdown = ({ setView, setHeader,  ...rest }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selection, setSelection] = useState(null)
    const divEl = useRef();



    useEffect(() => {
      const handler = (event) => {
        if(!divEl.current) {
          return;
        }

        if (!divEl.current.contains(event.target)) {
          setIsOpen(false);
        }
      }

      document.addEventListener('click', handler, true);


      return () => {
        document.removeEventListener('click', handler)
      }

    }, []);
   

    const handleClick = () => {
        setIsOpen(!isOpen)
    }


    const handleOptionClickEtch = (option) => {
      setIsOpen(false);
      setSelection(option);
      setView(<Canvas />)
      setHeader("Ej's Sketch Corner")
    }

    const handleOptionClickSnake = (option) => {
      setIsOpen(false);
      setSelection(option);
      setView(<Snake />)
      setHeader("Ej's Snake Corner")
    }

    const handleOptionClickStates = (option) => {
      setIsOpen(false);
      setSelection(option);
      setView(<States />)
      setHeader("Ej's States Corner")
    }

  return (
    <div ref={divEl} className='w-120 relative'>
        <Card {...rest} className="flex justify-between items-center curser-pointer" 
        onClick={handleClick} >
          Games
          <GoChevronDown className='text-xl' />
        </Card>
        {isOpen &&
        <Card id='card' className='absolute top-full bg-sky-200 gap-2 flex flex-col w-120'>
          <Card className='hover:bg-sky-100' onClick={() => handleOptionClickEtch()}>Etch-a-Sketch</Card>
          <Card className='hover:bg-sky-100' onClick={() => handleOptionClickSnake()}>Snake [Python]</Card>
          <Card className='hover:bg-sky-100' onClick={() => handleOptionClickStates()}>US States Quiz [Python]</Card>
        </Card>}
    </div>
  )
}

export default Dropdown