import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { slidesData } from '@/models/data';

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="w-screen">
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="relative lg:h-[600px] overflow-hidden">
            <picture className="w-full">
              <source media="(max-width: 500px)" srcSet={slide.smallImage} />
              <source media="(min-width: 501px)" srcSet={slide.bigImage} />
              <Image
                src={slide.bigImage} // Fallback if <source> doesn't work
                alt={slide.title}
                className="w-full"
                width={slide.width}
                height={slide.height}
              />
            </picture>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
              <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;