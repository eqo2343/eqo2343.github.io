import React from 'react'
import Card from './Card'
import me from '/home/eqo234/resume-site/resume-site/Resume/src/assets/me2.jpg'
import { FaGithub } from "react-icons/fa";
import './AboutMe.css'



const AboutMe = () => {
  return (

        <div className='flex text-xl text-center gap-10 flex-col p-15 w-full h-full items-center  bg-sky-100'>
          <Card className='border flex flex-1 w-full '>
            <div className=' flex flex-1 flex-col align-center gap-10'>
              <h3 className='bg-white w-120 underline decoration-sky-400 text-3xl'>
                Meet Me: Elijah Douglas!
              </h3>
              <img id="me" src={me} alt='Profile Picture of Me' ></img>
            </div>
            <div className='flex gap-6 mt-10 justify-center  justify-start flex-2 '>
              <p className=' w-full text-3xl'>
                Hello!  My name is Elijah, and I'm a full-stack developer.  My coding journey began a few years ago 
                with helping an elderly employer catch his business up to modern times, and I have had a keen interest ever since.
                My first few projects were with Python, but I really enjoy designing responsive UIs, setting up APIs, and 
                making use of React's powerful toolbox.  My goal is to write code that is easy to read, scale, and maintain.
                I look forward to collaborating with groups to make even larger and more impressive projects!
              </p>
            </div>
          </Card>
        <Card className='border flex flex-1 w-full'>
          <div className='flex flex-1 flex-col'>
            <h3>Languages/frameworks:</h3>
            <ul>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Tailwind</li>
              <li>React Js</li>
              <li>Next JS</li>
              <li>Python</li>
              <li>TypeScript</li>
              <li>JQuery</li>
              <li>Vite</li>
            </ul>
          </div>
        <div className='flex flex-1 flex-col'>
          <h3>Programming Education:</h3>
          <ul>
            <li>The Odin Project Foundations Course</li>
            <li>The Odin Project Full Stack JavaScript Course</li>
            <li>JavaScript: Understanding the Weird Parts, Anthony Alicea</li>
            <li>Understanding HTML and CSS: Semantic HTML & Modern CSS 2025, Anthony Alicea</li>
            <li>Master the Coding Interview: Data Structures + Algorithms, Andrei Neagoie</li>
            <li>100 Days of Code: The Complete Python Bootcamp, Angela Yu [In Progress]</li>
            <li>Modern React with Redux [2024 Update], Stephen Grider [In Progress]</li>
          </ul>
        </div>
        </Card>
       
      </div>
  )
}

export default AboutMe