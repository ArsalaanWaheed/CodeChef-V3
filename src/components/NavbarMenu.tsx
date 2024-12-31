import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, Image, Users, Mail } from 'lucide-react';

export const menuItems = [
  { name: 'Home', icon: <Home className="w-5 h-5" />, path: '/home' }, 
  { name: 'Events', icon: <Calendar className="w-5 h-5" />, path: '/events' }, 
  { name: 'Gallery', icon: <Image className="w-5 h-5" />, path: '/gallery' },
  { name: 'Team', icon: <Users className="w-5 h-5" />, path: '/teams' },
  { name: 'Contact Us', icon: <Mail className="w-5 h-5" />, path: '/contact' },
];

export const NavbarMenu = () => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={item.path} // Direct link to the paths
          className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors duration-200"
        >
          {item.icon}
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );
};
