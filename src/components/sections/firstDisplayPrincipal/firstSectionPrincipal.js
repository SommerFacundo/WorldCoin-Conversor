import React, { useEffect,useState } from "react";
import styles from "./firstSectionPrincipal.module.css"
export function FirstSectionPrincipal(){
    const [ancho, setAncho] = useState(window.innerWidth);
    const [alto, setAlto] = useState(window.innerHeight);

    useEffect(()=>{
        const actualizarDimensiones = () => {
            setAncho(window.innerWidth);
            setAlto(window.innerHeight);
          };
      
          window.addEventListener('resize', actualizarDimensiones);
      
    },[])

    return(
        <div className={styles.containerSectionFirst}>
            <div className={styles.sectionFirst}>
                <div className={styles.sectionFirst_item1}>
                    <div className={styles.sectionFirstItem1__texto}>
                        <p>
                            NO SABES DONDE VENDER TUS MONEDAS?
                        </p>    
                    </div>
                    <div className={styles.sectionFirstItem1__btn} data-aos="flip-left">
                        <button>VENDER</button>
                    </div>
                    <div className={styles.sectionFirstItem1__subTexto}>
                        RAPIDO SEGURO CONFIABLE
                    </div>
                    
                    {ancho < 800 && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={styles.waveResponsivePrincipal}><path fill="#fff" fill-opacity="1" d="M0,128L48,112C96,96,192,64,288,74.7C384,85,480,139,576,170.7C672,203,768,213,864,197.3C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>}
                </div>
                {ancho > 768   && <div className={styles.sectionFirst_item2}></div>  }
     
                
            </div>
        </div>
    )


}