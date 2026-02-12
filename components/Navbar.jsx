'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Services', 'Blogs'];

  return (
    <nav className="bg-[#1B505B] text-white">
      <div className="container mx-auto px-8 py-6 border-b border-white/20">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-[26px] font-bold">AdiConsulting</div>

          <div className='flex items-center justify-between w-[50%]'>
            {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-[24px]">
            {menuItems.map((item) => (
              <a key={item} href="#" className="font-medium hover:opacity-80 transition-opacity">{item}</a>
            ))}
          </div>

          {/* Contact Button */}
          <a href="#" className="hidden md:flex items-center gap-2 font-medium hover:opacity-80 transition-opacity text-[24px]">
            Contact us <span>→</span>
          </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            {menuItems.map((item) => (
              <a key={item} href="#" className="block hover:opacity-80 transition-opacity">{item}</a>
            ))}
            <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              Contact us <span>→</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
