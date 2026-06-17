import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const Page = () => {
  return (
    <div className="relative ">
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
                  My Project
                </h1>
                {/* <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
                  Let's bring your ideas to life
                </p> */}
              </div>
            </div>


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
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-[80%] m-auto mt-20 mb-20 border-1 border-blue-700 ">
        <div>
          <Image
          src="/artismart.PNG"
          alt="My Project Image Background"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
        </div>
        <div className='border-r-1 border-blue-700'>
  <h1 className='text-blue-700 px-4 text-[15px] sm:text-[20px] py-4 font-bold'>
    ARTISMART PLATFORM
  </h1>

  <p className='text-blue-700 px-4 text-[13px] sm:text-[15px] py-1'>
    ArtisMart is a digital marketplace designed to connect customers with verified artisans and skilled service providers. The platform enables users to discover trusted professionals, request services, track job progress in real time, and communicate directly with artisans. Customers can browse artisan profiles, view ratings and reviews, and make informed decisions before hiring.
  </p>

  <p className='text-blue-700 px-4 text-[13px] sm:text-[15px] py-1'>
    The platform features secure authentication, artisan verification, real-time location tracking, service request management, customer reviews, and an admin dashboard for monitoring activities across the ecosystem. ArtisMart empowers artisans to showcase their skills while providing customers with a reliable and seamless service-booking experience.
  </p>

  <p className='px-4 mt-2 mb-2'>
    <Link
      href='https://artismarts.vercel.app/'
      className='bg-blue-700 rounded-lg text-white px-2 text-[13px] sm:text-[15px] py-1'
    >
      Visit the Website
    </Link>
  </p>
</div>
      </div>
      <Contact/>
      
    </div>
  )
}

export default Page
