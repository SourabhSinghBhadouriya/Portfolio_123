import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-stone-700 via-black to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-10'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur provident ipsam minus, deserunt voluptatem vero? Vitae, quasi aperiam ipsum totam dignissimos exercitationem rem! Rem numquam praesentium vel repellat possimus harum?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ex eaque, laudantium voluptates soluta voluptatibus.
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eaque at ipsa voluptates, qui dicta fugit est molestiae ex mollitia provident distinctio. Accusantium expedita reprehenderit dolor repellat corrupti aut veritatis! Mollitia sapiente at recusandae enim earum illum id laudantium ad!
            </p>
        </div>
    </div>
  )
}

export default About