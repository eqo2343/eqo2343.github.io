import React from 'react'
import Card from './Card'
import './Hardlees.css'
import hardlees1 from '/home/eqo234/resume-site/resume-site/Resume/src/assets/hardlees1.png'
import hardlees2 from '/home/eqo234/resume-site/resume-site/Resume/src/assets/hardlees2.png'
import { FaGithub } from "react-icons/fa";

const Hardlees = () => {
  return (
    <div className='flex text-xl text-center gap-10 flex-col p-10 w-full h-full items-center border'>
      <h3 className='bg-white w-60 underline decoration-sky-400 text-3xl'>My First React Project!</h3>
      <p>For my first React application (outside of building components), I chose to 
        recreate what I know.  A few blocks from my house is a Hardees fastfood restaurant,
        and seeing it every day inspired me to recreate their website.  While the application
        remains incomplete, the landing page section is mostly finished aesthetically, 
        and would lay the ground work for framing future applications.
      </p>
      
      <ul className=' flex gap-5 '>
        <li>uses rudimantary state</li>
        <li>relies heavily on tailwind</li>
        <li>implementation of reusable components and continuity of theme</li>
        <li>use of a technologies like react-icons and json-server</li>
      </ul>
    <div className='flex gap-6 mt-10 justify-center'>
      <img src={hardlees1} className='w-1/2' alt='screenshot of mock fastfood page' ></img>
      <img src={hardlees2} className='w-1/2' alt='screenshot of mock fastfood page' ></img>
    </div>
    <div className=' w-full h-full flex items-center justify-center gap-3'>
      <a href='https://github.com/eqo2343/restaurant-page.git' className=' color-sky-blue-400 flex gap-3 items-center'>
      <FaGithub />
      Check out my source code on GitHub!!
      </a>
    </div>
  </div>
  )
}

export default Hardlees