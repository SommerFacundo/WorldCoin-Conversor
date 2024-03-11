import React from "react";
import styles from "./footer.module.css"
import { FaInstagram, FaFacebook, FaLinkedin     } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export function Footer(){
    return(
        <footer className={styles.containerFooter}>
            
            <div className={styles.containerItemsFooter}>
            <div className={styles.footerItem}>
                Designed & Maintained by <span>Sommer Facundo</span>
                <div className={styles.containerLogosFooter}>
                    <a href="#"><FaInstagram/></a>
                    <a href="#"><FaFacebook/></a>
                    <a href="#"><FaLinkedin/></a>
                    <a href="#"><SiGmail/></a>

                </div>
            </div>
            <div className={styles.footerItem}>
                 Copyright © 2024 VendeTusWorldcoin
            </div>


            </div>

        </footer>
    )
}