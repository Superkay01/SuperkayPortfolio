import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="relative mb-20">
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
  My PROJECT
</span>


      <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-[80%] m-auto mt-10 border-1 border-blue-700 ">
        <div className='border-r-1 border-blue-700'>
          <h1 className='text-blue-700 px-4 text-[15px] sm:text-[20px] py-4 font-bold'>ECOWAS AGRICULTURE INFORMATION SYSTEM</h1>
          <p className='text-blue-700 px-4 text-[13px] sm:text-[15px] py-1'>Ecoagris is a comprehensive dashboard designed for the ECOWAS region, serving all ECOWAS countries. The system ensures data security, with each country agricultural information being isolated and accessible only to the respective country users,except for the Admin, who has access to all data. This platform stores agricultural data related to specific products, allowing users to track trends and insights across the region.</p>
          <p className='px-4 mt-2 mb-2'><Link href='https://ecoagris.vercel.app/' className='bg-blue-700 rounded-lg text-white px-2 text-[13px] sm:text-[15px] py-1'>Visit the Website</Link></p>
        </div>
        <div>
          <Image
          src="/EcoAgris.png"
          alt="My Project Image Background"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-[80%] m-auto mt-10 border-1 border-blue-700 ">
        <div>
          <Image
          src="/Ecowas.png"
          alt="My Project Image Background"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
        </div>
        <div className='border-r-1 border-blue-700'>
          <h1 className='text-blue-700 px-4 text-[15px] sm:text-[20px] py-4 font-bold'>ECOWAS FISHERIES DASHBOARD</h1>
          <p className='text-blue-700 px-4 text-[13px] sm:text-[15px] py-1'>The ECOWAS Fisheries dashboard serves all ECOWAS countries, ensuring secure and isolated access to each countrys data. Only the Admin has access to all countries information. The platform stores fisheries data related to fish species, enabling users to track trends and insights. It also supports three languages for broader accessibility across the region.</p>
          <p className='px-4 mt-2 mb-2'><Link href='https://ecowas-fish.vercel.app/' className='bg-blue-700 rounded-lg text-white px-2 text-[13px] sm:text-[15px] py-1'>Visit the Website</Link></p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-[80%] m-auto mt-10 border-1 border-blue-700 ">
        <div className='border-r-1 border-blue-700'>
          <h1 className='text-blue-700 px-4 text-[15px] sm:text-[20px] py-4 font-bold'>DATA4DECISION INTERNATIONAL</h1>
          <p className='text-blue-700 px-4 text-[13px] sm:text-[15px] py-1'>This website serves as an online presence for the organization, showcasing its work and sharing its mission with the world.</p>
          <p className='px-4 mt-2 mb-2'><Link href='https://www.data4decision.org/' className='bg-blue-700 rounded-lg text-white px-2 text-[13px] sm:text-[15px] py-1'>Visit the Website</Link></p>
        </div>
        <div>
          <Image
          src="/d4d.png"
          alt="My Project Image Background"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-[80%] m-auto mt-10 border-1 border-blue-700 ">
        <div>
          <Image
          src="/bank.png"
          alt="My Project Image Background"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
        </div>
        <div className='border-r-1 border-blue-700'>
          <h1 className='text-blue-700 px-4 text-[15px] sm:text-[20px] py-4 font-bold'>SMART BANK</h1>
          <p className='text-blue-700 px-4 text-[13px] sm:text-[15px] py-1'>The Smart Bank App is a sleek and intuitive template designed to resemble a fully functional banking application. It offers a user-friendly interface with essential banking features, providing an ideal starting point for creating a custom mobile banking experience. This template includes functionalities such as account management, transaction tracking, and balance viewing, making it an excellent choice for those looking to build or prototype their own banking app.</p>
          <p className='px-4 mt-2 mb-2'><Link href='https://d4dbank.vercel.app/' className='bg-blue-700 rounded-lg text-white px-2 text-[13px] sm:text-[15px] py-1'>Visit the Website</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Page
