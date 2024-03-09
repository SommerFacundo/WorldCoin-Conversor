import React from "react";
import styles from "./menuResponsive.module.css"
export function MenuResponsive(){
    return(
        <div className={styles.containerMenuResponsive}>
            <div className={styles.menuResponsive}>
                <a href="#sectionVentas">Quiero vender</a>
                <a href="#sectionReferencias">Referencias</a>
                <a href="#">Como Enviar?</a>
                <a href="#">Nosotros</a>
            </div>
        </div>
    )
}