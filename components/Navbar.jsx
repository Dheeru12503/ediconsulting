'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Services', 'Blogs'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0F2F35] text-white z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-white/20 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg sm:text-xl lg:text-[26px] font-bold">AdiConsulting</div>

          {/* Desktop Menu */}
          <div className="hidden min-[760px]:flex items-center space-x-4 xl:space-x-6 text-xl xl:text-[24px]">
            {menuItems.map((item) => (
              <a key={item} href="/about" className="font-medium hover:opacity-80 transition-opacity">{item}</a>
            ))}
          </div>

          {/* Contact Button */}
          <a href="#" className="hidden min-[760px]:flex items-center gap-2 font-medium hover:opacity-80 transition-opacity text-xl xl:text-[24px]">
            Contact us <span>→</span>
          </a>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="min-[760px]:hidden flex flex-col gap-1.5"
          >
            <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="min-[760px]:hidden absolute right-4 top-full mt-2 bg-[#03343D] rounded-lg shadow-lg p-4 min-w-[160px]">
            <div className="space-y-3 text-sm">
              {menuItems.map((item) => (
                <a key={item} href="#" className="block hover:opacity-80 transition-opacity">{item}</a>
              ))}
              <a href="#" className="block hover:opacity-80 transition-opacity">
                Contact us <span>→</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
