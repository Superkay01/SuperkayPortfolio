import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = () => {

    const project = [
        {id: '/EcoAgris.png', title: 'ECOWAS AGRICULTURE INFORMATION SYSTEM', description: 'Ecoagris is a comprehensive dashboard designed for the ECOWAS region, serving all ECOWAS countries. The system ensures data security, with each country agricultural information being isolated and accessible only to the respective country users,except for the Admin, who has access to all data. This platform stores agricultural data related to specific products, allowing users to track trends and insights across the region.', link: '/project',},
        {id: '/Ecowas.png', title: 'ECOWAS FISHERY DASHBOARD', description: 'The ECOWAS Fisheries dashboard serves all ECOWAS countries, ensuring secure and isolated access to each countrys data. Only the Admin has access to all countries information. The platform stores fisheries data related to fish species, enabling users to track trends and insights. It also supports three languages for broader accessibility across the region.', link: 'href="/project'},
        {id: '/d4d.png', title: 'Data4Decision International', description: 'This website serves as an online presence for the organization, showcasing its work and sharing its mission with the world.', link: '/project'},
        {id: '/bank.png', title: 'SMART BANK', description: 'The Smart Bank App is a sleek and intuitive template designed to resemble a fully functional banking application. It offers a user-friendly interface with essential banking features, providing an ideal starting point for creating a custom mobile banking experience. This template includes functionalities such as account management, transaction tracking, and balance viewing, making it an excellent choice for those looking to build or prototype their own banking app.', link: '/project'},
    ]
  return (
    <div className='pt-20 pb-15'>
        <div className="text-blue-700 text-center text-3xl px-10  sm:text-[50px] font-bold mb-10">Project</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto ">
            {project.map((project)=>(
                <div key={project.id} className="px-2 border-1 border-blue-700 p-2">
                    <div className="">
                        <Image src={project.id}
                        alt={project.title}
                        width={300}
                        height={300}
                        className="w-full h-[250px] object-cover object-top mt-2"/>
                    </div>
                    <div className="">
                        <h1 className="text-blue-700 px-4 text-[15px] sm:text-[20px] py-4 font-bold">{project.title}</h1>
                    </div>
                    <div className="">
                        <h1 className='text-blue-700 px-4 text-[13px] sm:text-[15px] py-1 '>{project.description}</h1>
                    </div>
                    <div className="px-4">
                        <Link href={project.link} className="inline-block">
                            <p className=" bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm px-2 
                            py-1 rounded-lg transition-colors duration-200">
                            View Project
                            </p>
                        </Link>
                        </div>
                    </div>
            ))}
        </div>
        
    </div>
  )
}

export default Project