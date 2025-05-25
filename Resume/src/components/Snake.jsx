import React from 'react'
import './Snake.css'
import { FaGithub } from "react-icons/fa";
import snake from '/home/eqo234/resume-site/resume-site/Resume/src/assets/snake.png'

const Snake = () => {
    

    return (
        <div className='flex text-xl text-center gap-10 flex-col p-10 w-full h-full items-center border'>
              <h3 className='bg-white w-60 underline decoration-sky-400 text-3xl'>Snake!</h3>
              <p>  Part of the Full Stack journey is mastering the back-end as well as the front, and 
                Python is my language of choice for the back.  Building the classic "Snake" was a fun exercise 
                in not only creating a game, but taking in user input and producing an
                interactive experience.  The game is also able to hold persistent data, saving a local "highscore"
                 until the game is closed out by writing the highest game store to CSV.
              </p>
              
              <ul className=' flex gap-5 '>
                <li>Practice with modular Python</li>
                <li>Built with the Turtle library</li>
                <li>launched to web using Pygbag</li>
                <li>Uses classes to build objects</li>
              </ul>
            <div className='flex gap-6 mt-10 justify-center'>
              <img id="snake" src={snake} className='w-1/2' alt='screenshot of snake game' ></img>
            </div>
            <div className=' w-full h-full flex items-center justify-center gap-3'>
              <a href='https://github.com/eqo2343/Snake-' className=' color-sky-blue-400 flex gap-3 items-center'>
              <FaGithub />
              Check out my source code on GitHub!!
              </a>
            </div>
          </div>
    )
}

export default Snake;