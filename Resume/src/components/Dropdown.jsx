import React, { useState, useEffect, useRef } from 'react'
import { GoChevronDown } from 'react-icons/go';
import Card from './Card';

const Dropdown = ({ ...rest }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selection, setSelection] = useState(null)
    const divEl = useRef();

    const dropOptions = [
      {label: 'Etch a Sketch', value: 'Etch a Sketch'},
      {label: 'Snake', value: 'Snake'},
      {label: 'US States Quiz', value: 'US States Quiz' }
      
    ]

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

    const handleOptionClick = (option) => {
      setIsOpen(false);
      setSelection(option)
    }

    const renderedOptions = dropOptions.map((option) => {
      return <Card className='hover:bg-sky-100' onClick={() => handleOptionClick(option)} key={option.value} >
      {option.label}
  </Card>
    })

  return (
    <div ref={divEl} className='w-60 relative'>
        <Card {...rest} className="flex justify-between items-center curser-pointer" 
        onClick={handleClick} >
          Games
          <GoChevronDown className='text-xl' />
        </Card>
        {isOpen &&
        <Card id='card' className='absolute top-full bg-sky-200 gap-2 flex flex-col w-60'>
          {renderedOptions}
        </Card>}
    </div>
  )
}

export default Dropdown