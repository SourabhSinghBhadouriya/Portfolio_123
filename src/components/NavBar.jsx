import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'
export default function Navbar() {
    const [nav, setnav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'home',
        }
        ,
        {
            id: 2,
            link: "about",
        }
        ,
        {
            id: 3,
            link: "contact",
        }
        ,
        {
            id: 4,
            link: 'experience'
        }
    ]
    return (
        <div className="flex justify-between bg-black text-white px-4 items-center w-full h-20">
            <div className='flex'>
                <h1 className='text-5xl font-signature'>Sourabh Singh Bhadouriya</h1>
            </div>
            <ul className="hidden md:flex">
                {
                    links.map(({ id, link }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200"><Link to={link} smooth duration={1000}>{link}</Link></li>
                    ))
                }

            </ul>
            <div onClick={() => setnav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {
                    nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>
                }
            </div>
            {
                nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 '>
                        {

                            links.map(({ id, link }) => (
                                <li key={id} className="mx-5 cursor-pointer capitalize py-6 text-4xl"><Link onClick={()=> setnav(false)} to={link} smooth duration={500}>{link}</Link></li>
                            ))

                        }
                    </ul>
                )
            }
            <div className="4xl">hello</div>
        </div >
    );
};