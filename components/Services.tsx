'use client'
import React from 'react';
import { 
  FaGlobe, 
  FaPaintBrush, 
  FaVideo, 
  FaSearch, 
  FaMobileAlt, 
  FaChartLine 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Website Development",
      description: "Custom websites, landing pages, e-commerce solutions, and professional WordPress websites tailored to your brand.",
      icon: <FaGlobe size={48} />,
    },
    {
      title: "Graphic Design",
      description: "Eye-catching logos, banners, social media graphics, and branding materials crafted using Canva and professional tools.",
      icon: <FaPaintBrush size={48} />,
    },
    {
      title: "Video Editing",
      description: "High-quality video editing, reels, YouTube videos, and motion graphics edited professionally with CapCut.",
      icon: <FaVideo size={48} />,
    },
    {
      title: "Research & Analysis",
      description: "In-depth Academic research, data analysis, and actionable insights for informed decision making.",
      icon: <FaSearch size={48} />,
    },
    {
      title: "UI/UX Design",
      description: "User-friendly and visually appealing interface designs that enhance customer experience across all devices.",
      icon: <FaMobileAlt size={48} />,
    },
    {
      title: "Digital Marketing",
      description: "SEO, social media management, content strategy, and targeted campaigns to grow your online presence.",
      icon: <FaChartLine size={48} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/tech.jpg')",
            animation: "kenBurns 28s infinite alternate ease-in-out",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            From stunning websites to creative content - we provide complete digital solutions for your business growth.
          </p>
        </div>

        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
          ↓ Scroll to explore
        </div> */}
      </div>

      {/* ==================== MAIN CONTENT AREA WITH ANIMATED IMAGE BACKGROUND ==================== */}
      <div className="relative overflow-hidden">
        
        {/* Animated Image Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: "url('/tech2.jpg')",   // ← Change this image if needed
            animation: "kenBurns 35s infinite alternate ease-in-out",
          }}
        />

        {/* Services Grid */}
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group hover:-translate-y-2 border border-white"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  {service.title}
                </h3>
                <p className="text-blue-600 text-sm md:text-[15px] leading-relaxed text-[17px]">
                  {service.description}
                </p>
                <button className="mt-8 text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all hover:text-blue-700">
                  Learn More 
                  <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="relative py-16 md:py-20 bg-white/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-blue-700">
                Why Choose SuperkayTech?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "Fast", label: "Turnaround Time" },
                { number: "24/7", label: "Support Available" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-blue-700 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-500 text-[12px] md:text-[15px] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-[var(--blue)] backdrop-blur-md text-white py-16 md:py-20 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">
              Ready to Grow Your Business?
            </h2>
            <p className="text-white text-lg mb-8">
              Let's turn your ideas into reality with professional digital solutions.
            </p>
            <button 
              className="bg-white text-blue-700 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all active:scale-95"
              onClick={() => window.location.href = '/contact'}
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;