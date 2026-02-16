'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const menuItems = ['Home', 'About', 'Services', 'Blogs'];
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === '/about') {
      setActiveItem('About');
    } else if (pathname === '/') {
      const hash = window.location.hash;
      if (hash === '#consulting-services') {
        setActiveItem('Services');
      } else {
        setActiveItem('Home');
      }
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('consulting-services');
      if (servicesSection && pathname === '/') {
        const rect = servicesSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if services section is in the middle of viewport
        const isInView = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
        
        if (isInView) {
          setActiveItem('Services');
        } else {
          setActiveItem('Home');
        }
      }
    };

    handleScroll(); // Run on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleMenuClick = (item) => {
    setActiveItem(item);
    if (item === 'Services') {
      const section = document.getElementById('consulting-services');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      } else {
        router.push('/#consulting-services');
      }
    } else if (item === 'Home') {
      router.push('/');
    } else if (item === 'About') {
      router.push('/about');
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <nav className="fixed top-0 left-0 right-0 bg-[#0F2F35] text-white z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-white/20 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg sm:text-xl lg:text-[26px] font-bold">EDIConsulting</div>

          {/* Desktop Menu */}
          <div className="hidden min-[760px]:flex items-center space-x-4 xl:space-x-6 text-xl xl:text-[24px]">
            {menuItems.map((item) => (
              <button 
                key={item} 
                onClick={() => handleMenuClick(item)}
                className={`font-medium hover:opacity-80 transition-opacity cursor-pointer pb-1 border-b-2 ${
                  activeItem === item ? 'border-white' : 'border-transparent'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <button onClick={() => router.push('/contact')} className="hidden min-[760px]:flex items-center gap-2 font-medium hover:opacity-80 transition-opacity text-xl xl:text-[24px]">
            Contact us <span>→</span>
          </button>

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
                <button 
                  key={item} 
                  onClick={() => handleMenuClick(item)}
                  className="block hover:opacity-80 transition-opacity cursor-pointer w-full text-left"
                >
                  {item}
                </button>
              ))}
              <button onClick={() => router.push('/contact')} className="block hover:opacity-80 transition-opacity w-full text-left">
                Contact us <span>→</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
}
