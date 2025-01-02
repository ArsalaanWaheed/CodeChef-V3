import React from 'react';
import { menuItems } from './NavbarMenu';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  scrollToTop:()=>void
  scrollToEvents: () => void;
  scrollToContact:()=>void;
}


const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen ,scrollToTop,scrollToEvents,scrollToContact}) => {
  const actionMap: Record<string, () => void> = {
    scrollToTop,
    scrollToEvents,
    scrollToContact,
  };
  return (
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {menuItems.map((item) => (
          <Link
          key={item.name}
          
          onClick={(e) => {
            // Prevent navigation if only scroll behavior is desired
           const action = actionMap[item.action];
           if (action) action();
         }}
         to={item.path}
           //Direct link to the paths
            
            className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors duration-200"
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
        {/* <button className="w-full mt-2 bg-white text-indigo-600 dark:bg-indigo-600 dark:text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-50 dark:hover:bg-indigo-700 transition-colors duration-200">
          Join Us
        </button> */}
      </div>
    </div>
  );
};

export default MobileMenu;