import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


interface BannerCarouselProps {
  banners: string[] | StaticImageData[];
}

const Crousal: React.FC<BannerCarouselProps> = ({ banners }) => {
  return (
    <div className="w-full h-3/4 md:h-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img src={banner} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Crousal;
