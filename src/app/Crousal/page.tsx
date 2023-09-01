"use client"
import React,{useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { baseImgUrl, baseUrl } from '@/Url';




const Crousal: React.FC = () => {
  const [images, setImages] = useState<{ image1: string, image2: string, image3: string }>({
    image1: '',
    image2: '',
    image3: '',
  });
  useEffect(()=>{
    axios.get(`${baseUrl}/getBanner`)
    .then((response)=>{
     
      setImages({
        image1: response.data.data.image1 , // Replace with your actual property names
        image2: response.data.data.image2 ,
        image3: response.data.data.image3 ,
      })
      console.log('images',images)
      //setImages(response.data.data[0]),
     // console.log('getbannr',images)
    }
     )
    .catch((error)=>{console.log(error)})
  
  },[])
  return (
    <div className="w-full h-full ">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
       
          <SwiperSlide>
            <img src={`${baseImgUrl}/${images.image1}`} alt={`${baseImgUrl}/${images.image1} `} className="w-full h-full object-cover" />
           
          </SwiperSlide>
          <SwiperSlide>
          
       <img src={`${baseImgUrl}/${images.image2}`} alt={`Banner `} className="w-full h-full object-cover" />
          
          </SwiperSlide>
          <SwiperSlide>
           
            <img src={`${baseImgUrl}/${images.image3}`} alt={`Banner `} className="w-full h-full object-cover" /> 
          </SwiperSlide>      
      </Swiper>
    </div>
  );
};

export default Crousal;
