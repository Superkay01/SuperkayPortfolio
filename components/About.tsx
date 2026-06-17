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
                <div className="text-white text-[12px] sm:text-[15px] sm:px-10 px-4 mt-5">
                    <p>
                   I am a dedicated Web Developer with expertise in 
                   HTML5, CSS3, JavaScript, React.js, and Next.js. 
                   I specialize in building modern, responsive, 
                   and user-friendly web applications that deliver excellent performance,
                   accessibility, and cross-browser compatibility across all devices.
                   </p>
                   <p>
                   With a strong understanding of UI/UX design principles,
                   I create engaging and intuitive digital experiences that 
                   enhance user interaction and satisfaction. 
                   My technical expertise also includes backend integration 
                   and database management using Firestore
                   and Supabase Database, as well as media storage and optimization
                   through Cloudinary for efficient image and video management.
                    </p>
                    <p>
                   Passionate about continuous learning and innovation, 
                   I stay current with emerging technologies and industry best practices. 
                   I am committed to developing scalable, reliable, 
                   and high-quality web solutions that meet both user 
                   expectations and business objectives while delivering 
                   measurable value to clients and organizations.
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About