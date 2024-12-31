import React from 'react';
import { Code2 } from 'lucide-react';
import logo from './logo.png'

const NavbarBrand = () => {
  return (
    <div className="flex-shrink-0 flex items-center space-x-3">
      <img src={logo} className='h-20 w-20'></img>
    </div>
  );
};

export default NavbarBrand;