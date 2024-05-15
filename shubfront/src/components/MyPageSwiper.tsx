import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FormalPage from '../mypages/FormalPage';
import CasualPage from '../mypages/CasualPage';
import QR_show from '../views/QR_show';

const PageSwiper: React.FC = () => {
 const [pages, setPages] = useState([
   { id: 1, component: <FormalPage /> },
   { id: 2, component: <CasualPage /> },
 ]);

 return (
   <Swiper spaceBetween={50} slidesPerView={1}>
     {pages.map(({ id, component }) => (
       <SwiperSlide key={id}>{component}</SwiperSlide>
     ))}
   </Swiper>
 );
};

export default PageSwiper;
