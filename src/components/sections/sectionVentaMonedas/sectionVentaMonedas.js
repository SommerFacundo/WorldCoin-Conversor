import React, { useState,useEffect} from "react";
import styles from "./sectionVentaMonedas.module.css"

export function SectionVentaMonedas(){
    const[priceWLD, setPriceWLD] = useState(0);
    const[mensajeVenta,setMensajeVenta] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://min-api.cryptocompare.com/data/price?fsym=WLD&tsyms=ARS");
                const data = await response.json();
                setPriceWLD(data.ARS - 1200)
            } catch (error) {
                console.log("Error:", error);
            }
        };
    
        fetchData();
    
    }, [])
    console.log(priceWLD)

    function calcularArs(e){
        document.getElementById("cantArs").value = parseFloat((Math.round( parseFloat(e) * priceWLD * 100) / 100).toFixed(2)); ;
        setMensajeVenta(`Hola Facu, quiero vender mis ${e}WLD al precio de $${parseFloat((Math.round( parseFloat(e) * priceWLD * 100) / 100).toFixed(2))} pesos`)
    } 

    return(
        <>
            <div className={styles.containerSectionVenta} id="sectionVentas">


            <div className={styles.sectionVenta2}>
                <div className={styles.containerTitle}>
                    <p>COTIZA TUS <span className={styles.containerTitle_2}>MONEDAS ACA</span></p>

                </div>
                <div className={styles.containerConversor}>
                    <div className={styles.conversor + " " + styles.conversorWLD}>
                        <div className={styles.conversorLogo}>
                            <img src="/assets/logoWorldCoin.png"></img>
                        </div>
                        <div className={styles.conversorInput}>
                            <input min={0} type="number" id="cantWORLDVender" onChange={(e)=>calcularArs(e.target.value)}></input>
                        </div>
                    </div> 
                    <div className={styles.conversor + " " + styles.conversorARS}>
                    <div className={styles.conversorLogo}>
                            <img src="/assets/logoARS.webp"></img>
                        </div>
                        <div className={styles.conversorInput}>
                            <input type="number" id="cantArs" disabled></input>
                        </div>
                    </div>
                    <div className={styles.containerConversorBtnVender}>
                        <a href={`https://wa.me/2235372208?text=${mensajeVenta}`} target="_blank" className={styles.conversorBtnVender}>VENDER</a>
                        <button className={styles.conversorBtnCotizar}>COTIZAR</button>
                    </div>
                    <div className={styles.conversorMsg}>
                        <p>!Sera redirigido a Whattsap para concretar la venta<br></br>En caso de presencial debe ser de MDP</p>
                    </div>
                </div>

                </div>
            </div>
        </>

    )
}

