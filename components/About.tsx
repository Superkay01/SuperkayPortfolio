import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='bg-blue-700 pt-20 sm:h-[800px] h-[1000px] '>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 sm:px-10 px-0">
            <div className=" w-full h-[500px]">
                <Image src="/kay2.jpeg" width={500} height={500} alt="About me Picture" className='object-cover object-top sm:w-[80%] w-full h-[500px] sm:ml-[40px]'/>
            </div>
            <div className="text-white text-[15px] sm:text-[20px]">
                <h1 className="text-white text-center text-3xl px-10  sm:text-[50px] font-bold mt-5">About Me</h1>
                <p className="text-white text-[15px] sm:text-[20px] sm:px-10 px-4 mt-5">
                   I’m a passionate Frontend Web Developer skilled in HTML5, CSS3, JavaScript (ES6+), React.js, and Next.js. I specialize in building responsive, user-friendly web applications with a focus on performance, accessibility, and cross-browser compatibility. With a keen eye for UI/UX design, I create intuitive and dynamic websites that deliver seamless experiences across all devices. I’m also familiar with Firestore for backend integration and Cloudinary for efficient image and video management. Always eager to learn and grow, I strive to stay ahead of industry trends and build high-quality solutions that meet client needs.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About