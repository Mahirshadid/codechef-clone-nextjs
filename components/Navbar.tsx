"use client";

import Image from 'next/image'
import React, { useEffect } from 'react';
import './navbar.css'

import logo from '../public/cc-logo.svg'
import mobilelogo from '../public/cc-logo-mobile-1.svg'
import Link from 'next/link'

const Navbar = () => {

  useEffect(() => {

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const desktopLogo = document.getElementById('logo1');
      const mobileLogo = document.getElementById('logo2');

      if (desktopLogo && mobileLogo) {
        if (screenWidth < 680) {
          desktopLogo.style.display = 'none';
          mobileLogo.style.display = 'block';
        } else {
          desktopLogo.style.display = 'block';
          mobileLogo.style.display = 'none';
        }
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='navbar'>
      <div className='navbar-logo' id='logo1'>
        <a href='#'><Image src={logo} alt='' priority={true}
        style={{width:'150px', height:'80px'}}/></a>
      </div>
      <div className='navbar-logo' id='logo2'>
        <Image src={mobilelogo} alt='' priority={true}
        style={{width:'100%', minWidth:'100px'}}/>
      </div>
      <div className='navbar-sf'>
        <p><a href='#students'>Students</a></p>
        <p><a href='#faculty'>Faculty</a></p>
      </div>
      <div className='navbar-ls'>
        <p id='login'><Link href='https://www.codechef.com/login?destination=/'>Login</Link></p>
        <p id='sign'><Link href='https://www.codechef.com/signup?destination=/'>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Navbar