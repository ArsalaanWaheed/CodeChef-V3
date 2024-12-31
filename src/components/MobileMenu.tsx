import React from 'react';
import { menuItems } from './NavbarMenu';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors duration-200"
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
        <button className="w-full mt-2 bg-white text-indigo-600 dark:bg-indigo-600 dark:text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-50 dark:hover:bg-indigo-700 transition-colors duration-200">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;