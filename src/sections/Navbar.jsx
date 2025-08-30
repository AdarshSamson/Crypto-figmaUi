import Button from "../components/Button";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Trade", href: "/" },
  { label: "Market", href: "/" },
  { label: "Learn", href: "/" },
  { label: "Support", href: "/" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-6 md:px-10 py-4  text-white border-b border-gray-800 relative">
      <div className="flex justify-between items-center">

        <h1 className="text-xl font-bold text-primary">
          Crypto<span className="text-white">Dive</span>
        </h1>

   
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="hover:text-primary cursor-pointer transition-colors"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button text="Sign Up" variant="primary" className="hidden md:block" />

       
          <button
            className="flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute z-50 top-16 left-0 w-full bg-primary-color border-t border-gray-800 flex flex-col items-center gap-4 py-6 md:hidden">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-primary cursor-pointer transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
           <Button text="Sign Up" variant="primary"  />
        </div>
        
      )}
    </nav>
  );
};

export default Navbar;
