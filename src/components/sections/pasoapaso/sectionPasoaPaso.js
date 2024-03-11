import React, { useRef, useState } from "react";
import styles from "./sectionPasoaPaso.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';


// import required modules
import { Pagination } from 'swiper/modules';

export function SectionPasoaPaso(){
    return(
        <section className={styles.containerSectionPasoaPaso} id="sectionPaso_A_Paso">
            <h2 className={styles.sectionPasoPasotitle}>¿COMO ENVIAR?</h2>
            <Swiper 
         spaceBetween={30}
         pagination={{
           clickable: true,
         }}
         modules={[Pagination]}
            className={`mySwiper + ${styles.contenedorPasoaPaso}`} >
                <SwiperSlide className={styles.paso1_pasoapaso + " " + styles.pasoapaso}>
                    <div className={styles.textpaso}>
                        <b>Paso 1:</b> Abrir aplicacion y entrar a seccion WorldCoin (section negra)
                    </div>
                    <div className={styles.pasoapasoImg}>
                        <img src="/assets/pasoapaso/paso1.jpeg"></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.paso2_pasoapaso + " " + styles.pasoapaso}>
                    <div className={styles.textpaso}>
                        <b>Paso 2:</b> Apretar en la opcion Enviar
                    </div>
                    <div className={styles.pasoapasoImg}>
                        <img src="/assets/pasoapaso/paso2.jpeg"></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.paso3_pasoapaso + " "  + styles.pasoapaso}>
                    <div className={styles.textpaso}>
                        <b>Paso 3:</b> Pegar la direccion que se le brinda por whattsap <span className={styles.direccionBilletera}>(0x352522bb4a4e8ea11d57b809d55e20af8544fa5a)</span>
                    </div>
                    <div className={styles.pasoapasoImg}>
                        <img src="/assets/pasoapaso/paso3.jpeg"></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.paso4_pasoapaso  + " " + styles.pasoapaso}>
                    <div className={styles.textpaso}>
                        <b>Paso 4:</b> Presionar Confirmar
                    </div>
                    <div className={styles.pasoapasoImg}>
                        <img src="/assets/pasoapaso/paso4.jpeg"></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.paso5_pasoapaso  + " " + styles.pasoapaso}>
                    <div className={styles.textpaso}>
                        <b>Paso 5:</b> Colocar la cantidad de monedas, por ejemplo si queres enviar una moneda poner el valor de 1 moneda
                    </div>
                    <div className={styles.pasoapasoImg}>
                        <img src="/assets/pasoapaso/paso5.jpeg"></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.paso6_pasoapaso + " " +styles.pasoapaso}>
                    <div className={styles.textpaso}>
                        <b>Paso 6:</b> Confirmar y enviar captura a whattsap como comprobante
                    </div>
                    <div className={styles.pasoapasoImg}>
                        <img src="/assets/pasoapaso/paso6.jpeg"></img>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}