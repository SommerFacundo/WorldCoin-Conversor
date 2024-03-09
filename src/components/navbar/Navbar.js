import React from "react";
import styles from "./navbar.module.css"


export function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.containerItemsNavbar}>
                    <div className={styles.navbar_item}>
                        <a href="#sectionVentas">Quiero Vender</a>
                    </div>
                    <div className={styles.navbar_item}>
                        <a href="#sectionReferencias">Referencias</a>
                    </div>
                    <div className={styles.navbar_item}>
                        <a href="#">
                           <img src="/assets/logoWorldCoin.png" className={styles.logoNavbar}></img>
                        </a>
                    </div>
                    <div className={styles.navbar_item}>
                    <a href="#sectionNosotros">Nosotros</a>
                    </div>
                    <div className={styles.navbar_item}>
                    <a href="#">¿Como Enviar?</a>
                    </div>
                </div>
            </nav>

        </>
    )


}