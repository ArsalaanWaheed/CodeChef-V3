import React, { useRef } from 'react';
import { Code2 } from 'lucide-react';
import logo from './logo.png'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const NavbarBrand = () => {
  const aniRef=useRef(null);
  // useGSAP(()=>{
   
  //   const logoAni= gsap.from(aniRef.current,{
      
    
      
  //     rotate:360,
  //     delay:3,
  //     duration:4,
  //     ease: 'power2.inOut',
  //     repeat:-1
      
  //   })
  //   window.addEventListener('resize',()=>{
  //     logoAni.pause(0).invalidate().play()
  //       })
  // })
 
  return (
    <div className="flex-shrink-0 flex items-center space-x-3">
      <img  ref={aniRef} src={logo} className='logo h-20 w-20'></img>
    </div>
  );
};

export default NavbarBrand;