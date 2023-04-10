import React from 'react';
import Card1DE from '../Assets/Section3/Card1DE.png';
import Image from 'next/image';

const Card = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white rounded-lg shadow-md overflow-hidden w-60%" >
            <div className="md:w-1/2 p-4">
                <Image className="w-full h-full object-cover rounded-lg md:rounded-none md:rounded-l-lg" src={Card1DE} alt="your-image" />
            </div>
            <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-2">Join Our Community</h2>
                <p className="text-gray-700 mb-4">Sign up & get 10% your first books.</p>
                <div className="flex items-center">
                    <input className="border-2 border-gray-300 p-2 w-full mr-2" type="text" placeholder="Your email address" />
                    <button id='anim1-sweep-to-right' className="bg-[#5a8e7a]  text-white py-2 px-4">Subscribe</button>
                </div>
                <div className="flex justify-start mt-4">
                    <a href="#" className="rounded-full bg-[#5a8e7a]  text-white hover:bg-green-800 w-10 h-10 flex items-center justify-center mr-2"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="rounded-full bg-[#5a8e7a]  text-white hover:bg-green-800 w-10 h-10 flex items-center justify-center mr-2"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="rounded-full bg-[#5a8e7a]  text-white hover:bg-green-800 w-10 h-10 flex items-center justify-center mr-2"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="rounded-full bg-[#5a8e7a]  text-white hover:bg-green-800 w-10 h-10 flex items-center justify-center mr-2"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="rounded-full bg-[#5a8e7a]  text-white hover:bg-green-800 w-10 h-10 flex items-center justify-center"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Card;
