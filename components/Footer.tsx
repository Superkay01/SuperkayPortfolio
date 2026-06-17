'use client';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-700 text-white border-t border-blue-600">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left: Brand & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} <span className="font-semibold">SuperkayTech</span>. 
              All rights reserved.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <Link 
              href="/about" 
              className="hover:text-blue-200 transition-colors duration-200 hover:-translate-y-0.5"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="hover:text-blue-200 transition-colors duration-200 hover:-translate-y-0.5"
            >
              Services
            </Link>
            <Link 
              href="/project" 
              className="hover:text-blue-200 transition-colors duration-200 hover:-translate-y-0.5"
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-blue-200 transition-colors duration-200 hover:-translate-y-0.5"
            >
              Contact
            </Link>
            <Link 
              href="/privacy" 
              className="hover:text-blue-200 transition-colors duration-200 hover:-translate-y-0.5"
            >
              Privacy
            </Link>
          </div>

          {/* Right: Social Icons */}
          <div className="flex gap-5">
            <Link
              href="https://x.com/MrKunmi0903003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-200 transition-all duration-200 hover:scale-125 active:scale-95"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </Link>

            <Link
              href="https://linkedin.com/in/adegbesan-oluwakayode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-200 transition-all duration-200 hover:scale-125 active:scale-95"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>

            <Link
              href="https://instagram.com/baba_jehjeh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-200 transition-all duration-200 hover:scale-125 active:scale-95"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>

            <Link
              href="https://facebook.com/oluwamayowaakinkunmi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-200 transition-all duration-200 hover:scale-125 active:scale-95"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-800 py-3 text-center text-xs text-blue-300">
        Made with ❤️ by SuperkayTech • 
        <span 
          className="cursor-pointer hover:text-white transition-colors ml-1 underline decoration-dotted"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to Top ↑
        </span>
      </div>
    </footer>
  );
};

export default Footer;