import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import 'react-image-lightbox/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { partnerData } from "../../../../hooks/PartnerData";

export function PartnerSlider() {
  const data =partnerData;
  const [images, setImages] = useState([]);
  

  useEffect(() => {
      if (data) {
        setImages(data);
      }
    }, []);

  const navigate=useNavigate();
  const { t,i18n } = useTranslation();



  
  
  return (
    <section className="section full projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">{t("WHY CHOOSE US")}</span>
          <h2 className="section-title">{t("OUR PARTNERS")}</h2>
        </div>
      <Swiper
        className="swipers"
        modules={[ Autoplay]}
        loop
        loopFillGroupWithBlank={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          430: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide
           className="swippers"
            key={idx}
            onClick={() => { navigate(`/${i18n.language}/partners`)  }}
          >
            <img className='seting'
              src={img.image}
              alt={img.alt || `Slide ${idx + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
       
      </div>
    </section>
  );
}
