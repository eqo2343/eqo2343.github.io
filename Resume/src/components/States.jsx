import React from 'react'
import { FaGithub } from "react-icons/fa";
import states from '/home/eqo234/resume-site/resume-site/Resume/src/assets/states.png'

const States = () => {
  return (
    <div className='flex text-xl text-center gap-10 flex-col p-10 w-full h-full items-center border'>
                  <h3 className='bg-white w-60 underline decoration-sky-400 text-3xl'>US States Game!</h3>
                  <p>  This project is another Python game.  A user guesses the names of US states in 
                    a prompt.  Correct state names are added to the map, and the total number of correct
                    guesses is tracked at the top of the prompt box.  This game uses a dictionary of state names and 
                    coordinates to track the location and proper spelling of each state, and uses Turtles to place 
                    name cards.
                  </p>
                  
                  <ul className=' flex gap-5 '>
                    <li>Utilizes both the Pandas and Turtle libraries</li>
                    <li>Read and Write to CSV</li>
                    <li>Makes use of storing and retrieving data from a local dictionary</li>
                  </ul>
                <div className='flex gap-6 mt-10 justify-center'>
                  <img id="snake" src={states} className='w-1/2' alt='screenshot of snake game' ></img>
                </div>
                <div className=' w-full h-full flex items-center justify-center gap-3'>
                  <a href='https://github.com/eqo2343/US-States-Quiz-' className=' color-sky-blue-400 flex gap-3 items-center'>
                  <FaGithub />
                  Check out my source code on GitHub!!
                  </a>
                </div>
              </div>
  )
}

export default States