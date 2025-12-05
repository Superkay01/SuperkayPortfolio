import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='relative'>
      <div className="relative">
                    <Image
                      src="/project.jpg"
                      alt="My Project Image Background"
                      width={500}
                      height={500}
                      className="object-cover w-full h-[200px]"
                    />
                  </div>
            
                 <span className="absolute top-20 left-1/2 -translate-x-1/2 
              text-white font-bold text-4xl sm:text-6xl">
              ABOUT ME
            </span>

            {/* ABOUT ME */}
            <div className='bg-blue-700 pt-20 sm:h-[800px] h-[1050px] '>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 sm:px-10 px-0">
                        <div className=" w-full h-[500px]">
                            <Image src="/Aboutme.jpeg" width={500} height={500} alt="About me Picture" className='object-cover object-top sm:w-[80%] w-full h-[500px] sm:ml-[40px]'/>
                        </div>
                        <div className="text-white text-[15px] sm:text-[20px]">
                            <h1 className="text-white text-center text-3xl px-10  sm:text-[50px] font-bold mt-5">About Me</h1>
                            <p className="text-white text-xs sm:text-sm sm:px-10 px-4 mt-5">
                               I am a passionate and results-driven Frontend Web Developer with a strong focus on creating responsive, user-friendly web applications. I specialize in using modern web technologies like HTML5, CSS3, JavaScript, React.js, and Next.js to build dynamic, interactive websites that deliver an exceptional user experience.

With a deep understanding of UI/UX principles, I ensure my designs are intuitive, aesthetically appealing, and mobile-first, providing seamless performance across all devices and browsers. My expertise in responsive design, cross-browser compatibility, and accessibility allows me to create websites that cater to diverse user needs while ensuring the highest standards of usability and performance.

I am also experienced in version control using Git and GitHub, and proficient in deploying applications to platforms like Vercel and Netlify. I am committed to continuous learning and improving my skills to stay ahead of industry trends and create cutting-edge, scalable solutions that align with client goals.

Driven by a passion for solving problems through technology, I thrive in collaborative environments and am always eager to take on new challenges. Whether building from scratch or optimizing existing websites, I’m focused on delivering high-quality results that make a lasting impact.
                            </p>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default page