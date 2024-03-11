import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./buttonWsp.module.css"
export function ButtonWsp(){
    return(
        <div className={styles.containerButtonWsp}>
            
            <a href="https://wa.me/2235372208?text=Hola Facu, tengo una consulta sobre la venta de worldcoin" target="_blank">
            <FaWhatsapp/>

            </a>
        </div>
    )
}