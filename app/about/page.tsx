import React from 'react'
import Image from 'next/image'
import Contact from '@/components/Contact'

const page = () => {
  return (
    <div className='relative'>
      
      <div className="relative h-[75vh] flex items-center justify-center overflow-hidden">
              <Image
                src="/tech.jpg"
                alt="Contact Background"
                fill
                className="object-cover"
                priority
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60" />
      
              {/* Overlay Text */}
              <div className="relative z-10 text-center px-6">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
                  About Me
                </h1>
                {/* <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                  Let's bring your ideas to life
                </p> */}
              </div>
            </div>

            {/* ABOUT ME */}
            <div className='bg-blue-700 pt-15 my-20 sm:h-[700px] h-[1050px] '>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 sm:px-10 px-0">
                        <div className=" w-full h-[500px]">
                            <Image src="/Aboutme.jpeg" width={500} height={500} alt="About me Picture" className='object-cover object-top sm:w-[80%] w-full h-[500px] sm:ml-[40px]'/>
                        </div>
                        <div className="text-white text-[15px] sm:text-[20px]">
                            <h1 className="text-white text-center text-3xl px-10  sm:text-[50px] font-bold mt-5">About Me</h1>
                            <div className="text-white text-xs sm:text-sm sm:px-10 px-4 mt-5">
                              <p>
                               I am a passionate and results-driven Frontend Web Developer 
                               with a strong focus on creating responsive, user-friendly web applications. 
                               I specialize in using modern web technologies like HTML5, CSS3, JavaScript, 
                               React.js, and Next.js to build dynamic, interactive websites that deliver 
                               an exceptional user experience.
                               </p>

                               With a deep understanding of UI/UX principles, 
                               I ensure my designs are intuitive, aesthetically appealing, 
                               and mobile-first, providing seamless performance across all 
                               devices and browsers. My expertise in responsive design, 
                               cross-browser compatibility, and accessibility allows me to
                               create websites that cater to diverse user needs while ensuring 
                               the highest standards of usability and performance.
                               <p>
                                I am also experienced in version control using Git and GitHub, 
                                and proficient in deploying applications to platforms like Vercel 
                                and Netlify. I am committed to continuous learning and improving 
                                my skills to stay ahead of industry trends and create cutting-edge, 
                                scalable solutions that align with client goals.
                                </p>
                                <p>
                                Driven by a passion for solving problems through technology, 
                                I thrive in collaborative environments and am always eager 
                                to take on new challenges. Whether building from scratch or 
                                optimizing existing websites, I’m focused on delivering high-quality 
                                results that make a lasting impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Contact/>
    </div>
  )
}

export default page