'use client';
import React from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Background */}
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
            CONTACT US
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Let's bring your ideas to life
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Left Column - Contact Info */}
          <div className="bg-blue-700 text-white p-10 md:p-16">
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            
            <p className="text-blue-100 md:text-xl text-sm text-lg mb-10">
              We'd love to hear from you! Whether you have a project in mind or just want to say hello.
            </p>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-4 rounded-2xl">
                  <FaPhone size={28} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-blue-200">Phone</p>
                  <p className="md:text-xl text-sm font-medium">+234 903 003 1328</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-4 rounded-2xl">
                  <FaEnvelope size={28} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-blue-200">Email</p>
                  <p className="text-xl font-medium">adegbesanoluwakayode52@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <p className="text-blue-200 mb-4">Follow us</p>
              <div className="flex gap-4">
                <Link href="https://instagram.com/baba_jehjeh" target="_blank" className="bg-white/20 hover:bg-white/30 p-4 rounded-2xl transition-all hover:scale-110">
                  <FaInstagram size={26} />
                </Link>
                <Link href="https://facebook.com/oluwamayowaakinkunmi" target="_blank" className="bg-white/20 hover:bg-white/30 p-4 rounded-2xl transition-all hover:scale-110">
                  <FaFacebook size={26} />
                </Link>
                <Link href="https://linkedin.com/in/adegbesan-oluwakayode" target="_blank" className="bg-white/20 hover:bg-white/30 p-4 rounded-2xl transition-all hover:scale-110">
                  <FaLinkedin size={26} />
                </Link>
                <Link href="https://x.com/MrKunmi0903003" target="_blank" className="bg-white/20 hover:bg-white/30 p-4 rounded-2xl transition-all hover:scale-110">
                  <FaXTwitter size={26} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Message */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-2xl md:text-5xl font-bold text-yellow-800 leading-tight mb-6">
              Let’s Build Something <span className="text-blue-700">Amazing</span> Together
            </h2>
            
            <p className="text-yellow-700 text-lg mb-10">
              Ready to create your dream website or digital solution? 
              We're just one message away.
            </p>

            <button 
              onClick={() => window.location.href = "mailto:adegbesanoluwakayode52@gmail.com"}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-10 py-5 rounded-2xl transition-all hover:scale-105 active:scale-95 w-fit"
            >
              Send us a Message
            </button>

            <p className="text-sm text-yellow-500 mt-8">
              We usually respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;