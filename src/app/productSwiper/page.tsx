import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';
// import 'swiper/components/scrollbar/scrollbar.min.css';
// core version + navigation, pagination modules:

import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from './ProductCard';

const products = [
  { title: 'Product 1', imageSrc: '/product1.jpg', price: '$100' },
  { title: 'Product 2', imageSrc: '/product2.jpg', price: '$150' },
  { title: 'Product 3', imageSrc: '/product3.jpg', price: '$200' },
  { title: 'Product 4', imageSrc: '/product4.jpg', price: '$120' },
];

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 p-8">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              title={product.title}
              imageSrc={product.imageSrc}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
