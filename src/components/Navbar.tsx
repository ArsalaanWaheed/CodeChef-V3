import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavbarBrand from './NavbarBrand';
import { NavbarMenu } from './NavbarMenu';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../hooks/useTheme';

const Navbar = ({ scrollToTop, scrollToEvents }: { scrollToTop: () => void, scrollToEvents: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  return (
    <nav className="bg-gradient-to-r from-primary-600 to-primary-500 dark:from-black dark:to-gray-900 text-white shadow-lg transition-colors duration-200 top-0 left-0 fixed z-10 w-full">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavbarBrand />
          <div className="flex items-center space-x-4">
            <ThemeToggle isDark={isDark} toggle={toggle} />
            <NavbarMenu scrollToTop={scrollToTop} scrollToEvents={scrollToEvents} />
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
