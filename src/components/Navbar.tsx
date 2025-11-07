import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'ABOUT US', href: '#about' },
  { name: 'COLLECTION', href: '#collection' },
  { name: 'SURFACES', href: '#surfaces' },
  { name: 'ARCHITECTURAL', href: '#architectural' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left nav items */}
          <div className="flex gap-8">
            {navItems.slice(0, 2).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-sm font-light tracking-wider transition-colors hover:text-gray-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Logo */}
          <a href="#" className="text-2xl font-serif italic">
            G
          </a>

          {/* Right nav items */}
          <div className="flex gap-8">
            {navItems.slice(2).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-sm font-light tracking-wider transition-colors hover:text-gray-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
