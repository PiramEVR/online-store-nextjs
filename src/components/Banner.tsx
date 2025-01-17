import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className='relative'>
            <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img
                        loading='lazy'
                        src="https://www.trn-news.ru/Ru/Upload/Image/ghjkcr65465tuhgjbgvhjh.jpeg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        loading='lazy'
                        src="https://www.trn-news.ru/Ru/Upload/Image/ghjkcr65465tuhgjbgvhjh.jpeg"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        loading='lazy'
                        src="https://www.trn-news.ru/Ru/Upload/Image/ghjkcr65465tuhgjbgvhjh.jpeg"
                        alt=""
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;