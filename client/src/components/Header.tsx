import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoFullPath from "@assets/logo-01.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('.mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full bg-white/95 shadow-md z-50 transition-all ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img 
            src={logoFullPath} 
            alt="AP Wall Print" 
            className={`transition-all ${scrolled ? 'h-8 sm:h-10' : 'h-10 sm:h-12'}`}
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <a href="#home" className="font-heading font-medium hover:text-[#ff0090] transition">Home</a>
          <a href="#portfolio" className="font-heading font-medium hover:text-[#ff0090] transition">Portfolio</a>
          <a href="#services" className="font-heading font-medium hover:text-[#ff0090] transition">Services</a>
          <a href="#testimonials" className="font-heading font-medium hover:text-[#ff0090] transition">Testimonials</a>
          <a 
            href="#contact" 
            className="bg-[#ff0090] text-white font-heading font-medium px-4 lg:px-5 py-2 rounded-md hover:bg-[#ff0090]/90 transition text-sm lg:text-base"
          >
            Get a Quote
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-[#ff0090] text-2xl mobile-menu-button"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Navigation - Full Screen Overlay */}
      <div 
        className={`fixed inset-0 md:hidden bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`bg-white h-auto max-h-[70vh] overflow-y-auto rounded-b-2xl shadow-lg transition-all duration-300 mobile-menu-container ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex flex-col space-y-4 p-6">
            <a href="#home" onClick={closeMobileMenu} className="font-heading font-medium text-lg py-2 hover:text-[#ff0090] transition">Home</a>
            <a href="#portfolio" onClick={closeMobileMenu} className="font-heading font-medium text-lg py-2 hover:text-[#ff0090] transition">Portfolio</a>
            <a href="#services" onClick={closeMobileMenu} className="font-heading font-medium text-lg py-2 hover:text-[#ff0090] transition">Services</a>
            <a href="#testimonials" onClick={closeMobileMenu} className="font-heading font-medium text-lg py-2 hover:text-[#ff0090] transition">Testimonials</a>
            <a 
              href="#contact" 
              onClick={closeMobileMenu}
              className="bg-[#ff0090] text-white font-heading font-medium px-5 py-3 rounded-md text-center text-lg hover:bg-[#ff0090]/90 transition mt-4"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
