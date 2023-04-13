import React from 'react';

import {BsStack} from 'react-icons/bs'
import {GiFallingBoulder} from 'react-icons/gi'

const Footer = () => {
  return (
    <footer id='foot' className="bg-sky-950 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-center md:justify-start md:flex-grow">
            <div className="mr-4">
              <i className="fas fa-book-open fa-2x"></i>
            </div>
            <div className="text-xl font-bold flex justify-center items-center"> 
            <BsStack className='text-[#5a8e7a]'/>    
            <p className='ml-4'> Your Title Here</p> 
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end mt-4 md:mt-0">
            <div className="mr-4">
              <i className="fas fa-life-ring fa-2x"></i>
            </div>
            <div className="text-xl font-bold flex justify-center items-center"> 
            <GiFallingBoulder className='text-[#5a8e7a]'/>    
            <p className='ml-4'> Your Title Here</p> 
            </div>
          </div>
        </div>
        <div id='foot2' className="mt-6 border-t border-white border-opacity-25 pt-6 md:flex md:items-center md:justify-between">
          <div className="text-lg font-bold">Your Word Here</div>
          <div className="text-lg">Your Text Here</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
