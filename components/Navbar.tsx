"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = (name) =>
    active === name
      ? "w-full bg-white text-blue-700 px-3 py-1 rounded-lg"
      : "text-white px-3 py-1 rounded-lg";

  return (
    <div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex bg-blue-700 items-center justify-between px-8 py-3">
        <Image src="/logo.png" width={70} height={70} alt="Superkay" />

        <ul className="flex gap-5">
          <li>
            <Link
              href="/"
              onClick={() => setActive("home")}
              className={linkClasses("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setActive("about")}
              className={linkClasses("about")}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/project"
              onClick={() => setActive("project")}
              className={linkClasses("project")}
            >
              Project
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              onClick={() => setActive("contact")}
              className={linkClasses("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex bg-blue-700 items-center justify-between px-8 py-3">
        <Image src="/logo.png" width={50} height={60} alt="Superkay" />
        <button
          className="text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {isOpen && (
        <ul className="absolute top-18 left-0 bg-blue-700/50 w-full flex flex-col gap-2 items-center py-4">
          <li>
            <Link
              href="/"
              onClick={() => setActive("/home")}
              className={linkClasses("/home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setActive("about")}
              className={linkClasses("about")}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/project"
              onClick={() => setActive("project")}
              className={linkClasses("project")}
            >
              Project
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              onClick={() => setActive("contact")}
              className={linkClasses("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
