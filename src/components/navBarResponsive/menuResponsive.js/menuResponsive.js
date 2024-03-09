import React from "react";
import styles from "./menuResponsive.module.css"
export function MenuResponsive(){
    return(
        <div className={styles.containerMenuResponsive}>
            <div className={styles.menuResponsive}>
                <div>Quiero vender</div>
                <div>Referencias</div>
                <div>Como Enviar?</div>
                <div>Nosotros</div>
            </div>
        </div>
    )
}