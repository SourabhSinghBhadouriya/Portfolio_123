import React from 'react'
import {MdArrowRight} from 'react-icons/md';
import heroImage from "../assets/heroImage.png";
import { Link } from 'react-scroll';
function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-stone-700'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Enthusiasts in the f
                </p>
                <div>
                    <Link to='portfolio' smooth duration={1000} className='group  text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>Portfolio
                        <span className='group-hover:rotate-90 duration-300'><MdArrowRight size={25} className='ml-1'></MdArrowRight></span>
                    </Link>
                </div> 
            </div>
            <div className='w-2/3'>
                <img src={heroImage} alt="myProfile" className='rounded-2xl mx-auto w-2/3 md:w-2/3'/>
            </div>
        </div>
    </div>
  )
}

export default Home