import React from 'react'

function Contact() {
    return (
        <div name="contact" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen md:h-screen'>
            <div className='text-white p-4 flex flex-col justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold border-b-4 inline border-gray-500 p-2'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/2bc56748-6a57-4e5d-b674-3fb723f62765" method="POST" className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name='name' placeholder='Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none
                    ' />
                        <input type="text" name='email' placeholder='Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none
                    ' />
                        <textarea name="message" placeholder ="Type a message" id="" rows="10" className='p-2 bg-transparent text-white border-2 focus:outline-none rounded-md'></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'> Send Me</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact