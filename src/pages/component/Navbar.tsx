import logo from "../../assets/img/logo.svg";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" w-full z-50 bg-[#d7d5d5] text-white">
      <nav className=" max-w-7xl mx-auto px-4 py-4 flex items-center justify-between ">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </a>

        {/* Burger button (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation links (desktop) */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#"
            className="px-4 py-2 bg-black rounded hover:bg-white hover:text-black transition"
          >
            Acheter
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-6 space-y-4">
          <a
            href="#"
            className="block bg-white text-black text-center  px-4 py-2  hover:bg-white hover:text-black transition"
          >
            Acheter
          </a>
        </div>
      )}
    </header>
  );
}
