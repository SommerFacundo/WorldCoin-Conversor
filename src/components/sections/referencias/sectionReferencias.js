import React from "react";
import styles from "./sectionReferencias.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiperC.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export function SectionReferencias(){
    return(
    <div className={styles.contenedorReferencias}>
        <p>
            REFERENCIAS
        </p>
    <div className={styles.contenedorSwiperCards}>

    <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/assets/referencias/2.jpeg"  loading="lazy"/>
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/3.jpeg" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/6.jpeg"  loading="lazy"/>
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/8.jpeg" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/9.jpeg" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/10.jpeg" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/11.jpeg" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/14.jpeg" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/15.jpeg" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/referencias/16.jpeg" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/17.jpeg" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/18.jpeg" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/19.jpeg" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/20.jpeg" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/21.jpeg" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/22.jpeg" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/23.jpeg" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/24.jpeg" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="/assets/referencias/25.jpeg" loading="lazy" />
          </SwiperSlide> 
          <SwiperSlide>
          <img src="/assets/referencias/26.jpeg" loading="lazy" />
          </SwiperSlide>


          
        </Swiper>
        
        </div>
    </div>

    )

}