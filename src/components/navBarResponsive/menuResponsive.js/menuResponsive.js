import React from "react";
import styles from "./menuResponsive.module.css"
export function MenuResponsive(){
    return(
        <div className={styles.containerMenuResponsive}>
            <div className={styles.menuResponsive}>
                <a href="#sectionVentas">Quiero vender</a>
                <a href="#sectionReferencias">Referencias</a>
                <a href="#">Presencial</a>
                <a href="#sectionPaso_A_Paso">Como Enviar?</a>
            </div>
        </div>
    )
}