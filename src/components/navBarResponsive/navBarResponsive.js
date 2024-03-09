import React, { useState } from "react";
import styles from "./navbarResponsive.module.css"
import { IoIosMenu, IoIosClose  } from "react-icons/io";
import { MenuResponsive } from "./menuResponsive.js/menuResponsive";
export function NavbarResponsive(){
    const [seeMenu,setSeeMenu] = useState(false);
    
    return(
        <div className={styles.containerNavbarResponsive}>
            <div className={styles.navbarResponsive}>
            <div className={styles.containerNavbarResponsive_logo}>
                <img src="/assets/logoWorldCoin.png"></img>
            </div>
            <div className={styles.containerNavbarResponsive__menu}>
                
                {seeMenu ? <IoIosClose onClick={()=>setSeeMenu(!seeMenu)}/> : <IoIosMenu onClick={()=>setSeeMenu(!seeMenu)}/>}
            </div>

            </div>
            {seeMenu && <MenuResponsive/>}

        </div>
    )
}