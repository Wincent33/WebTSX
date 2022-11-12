import React from "react";
import Swiper from 'react-id-swiper';
import './swiper.scss';
const ImageList = () => {
  const params = {
    slidesPerView: 6,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }
  
  return (
    <div>
      <Swiper {...params}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      </Swiper>
    </div>
  );
};

export default ImageList;
