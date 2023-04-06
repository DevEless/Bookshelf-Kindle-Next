import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import card1 from '../Assets/Caousel/card1.png'
import card2 from '../Assets/Caousel/card2.png'
import card3 from '../Assets/Caousel/card3.png'
import card4 from '../Assets/Caousel/card4.png'


const CarouselComponent = () => {
    const carouselData = [
        {
            imageUrl: card1,
        },
        {
            imageUrl: card2,
        },
        {
            imageUrl: card3,
        },
        {
            imageUrl: card4,
        },
    ];

    return (
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            interval={3000}
        >
            {
                carouselData.map((slide, index) => (
                    <div key={index} className='flex justify-center items-center bg-[#f6f8fa] h-[682px] gap-[400px]'>
                        <div className='flex flex-col justify-center items-start text-start gap-14'>
                            <div className='flex flex-col gap-5'>
                                <div className='text-[#5f8d7c] text-2xl font-semibold'>
                                    LET'S MAKE THE BEST INVESTMENT
                                </div>
                                <div className='font-medium text-3xl leading-[50px]'>
                                    There Is No Friend As <br />
                                    Loyal As A Book
                                </div>
                            </div>
                            <div className='text-[#797e84] text-xl leading-[20px]'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                                Atque ipsum natus quis quam dolores.
                            </div>
                            <div>
                                <button class="bg-[#5a8e7a] text-s text-white font-medium py-6 px-10 rounded">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-center items-end'>
                            <Image src={slide.imageUrl} alt={`Slide ${index + 1}`} className='h-[400px]' />
                        </div>
                    </div>
                ))
            }
        </Carousel>
    );
};

export default CarouselComponent;