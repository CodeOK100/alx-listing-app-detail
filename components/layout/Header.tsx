import React from 'react';
import Image from 'next/image';
import { LOGO_IMAGE } from '@/constants';


const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md px-4 py-4 flex justify-between items-center scale-z-100">
      <div className='flex items-center space-x-2 mr-0'>
        <Image
          src={LOGO_IMAGE}
          alt="Logo"
          width={40}
          height={40}
          className="object-contain"
        />

        <span className='text-2xl text-blue-600 font-bold'>ALX Listing</span>
      </div>
      <div className='flex items-center space-x-2'>
        <input type="text" placeholder='Search' className='w-95 px-3 py-1.5 border border-black/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400' />
      </div>
      <div className='flex items-center space-x-4'>
        <nav className='flex space-x-6'>
            <a href="#" className='hover:text-blue-500'>Rooms</a>
            <a href="#" className='hover:text-blue-500'>Mansions</a>
            <a href="#" className='hover:text-blue-500'>Countryside</a>
            <a href="#" className='hover:text-blue-500'>Luxury</a>
      </nav>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
          Sign In
        </button>

        <button className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
          Sign Up
        </button>
      </div>     
    </header>
  );
};

export default Header;