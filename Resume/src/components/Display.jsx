import React, { useState } from 'react'
import Card from './Card'
import Canvas from './Canvas'

const Display = () => {
  const [display, setDisplay] = useState(<Canvas />);

  return (
    <main className='container '>
          <Card className='flex text-center w-full h-full rounded-4xl ring-2 ring-sky-300 items-center justify-center'>
            {display}
          </Card>
      </main>
  )
}

export default Display