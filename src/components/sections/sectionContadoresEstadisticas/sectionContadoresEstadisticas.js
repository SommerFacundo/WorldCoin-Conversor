import { useEffect, useState, useRef} from "react";
import React from "react";
import AOS from "aos"
import 'aos/dist/aos.css'; // Importa los estilos CSS de AOS
import styles from "./sectionContadoresEstadisticas.module.css"
import { IoMdPerson } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";


export function SectionContadoresEstadisticas(){
    const [contadorMonedasCompradas,setContadorMonedasCompradas] = useState(250);
    const [contadorClientesFijos,setContadorClientesFijos] = useState(20);
    const [contadorMeses,setContadorMeses] = useState(3);

    const [contador,setContador] = useState(1)
    const [contador2,setContador2] = useState(1)
    const [contador3,setContador3] = useState(1)
    const intervalIdRef = useRef(null);

    useEffect(() => {


        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if(!intervalIdRef.current){
                        intervalIdRef.current = setInterval(() => {
                            setContador(prevContador => {
                                const newContador = prevContador + 1;
                                if (newContador === contadorMonedasCompradas) {
                                    clearInterval(intervalIdRef.current);
                                    console.log("EXITO");
                                }
                                return newContador;
                            });
                        },10)
                        const intervalClientes = setInterval(()=>{
                            setContador2(prevContador2 => {
                                const newContador = prevContador2 +1;
                                if(newContador === contadorClientesFijos){
                                    clearInterval(intervalClientes)
                                    console.log("EXITO 2")
                                }
                                return newContador

                            })
                        },100)
                        const intervalMeses= setInterval(()=>{
                            setContador3(prevContador3 => {
                                const newContador = prevContador3 +1;
                                if(newContador === contadorMeses){
                                    clearInterval(intervalMeses)
                                    console.log("EXITO 2")
                                }
                                return newContador

                            })
                        },500)

                    }
                    // Incrementa el contador cuando el elemento es visible
                }
            });
        });

        // Observa el elemento que quieres hacer visible
        const targetElement = document.querySelector('#contadoresEstadisticas');


        if (targetElement) {
            observer.observe(targetElement);
        }
   
        // Limpia la observación cuando el componente se desmonta
        return () =>{
            observer.disconnect();
            AOS.refresh(); // Reinicia AOS para eliminar las animaciones antes de desmontar el componente
        } 
            

   
    }, []);
    



    return(
        <div className={styles.containSectionContadoresEstadisticas}>
            <div className={styles.sectionContadoresEstadisticas} id="contadoresEstadisticas">
                <div className={styles.sectionContadorItem} data-aos="fade-right">
                    <div className={styles.sectionContadorItemText}>
                        <p className={styles.sectionContadorItem__title} id="contadorMonedasCompradas">+{contador}<div className={styles.sectionContadorItem_logo}><img src="/assets/logoWorldCoin.png"></img></div></p>
                        <p className={styles.sectionContadorItem__subtitle}>Monedas compradas</p>
                    </div>
                </div>
                <div className={styles.sectionContadorItem}>
                    <div className={styles.sectionContadorItemText} data-aos="fade-down">
                        <p className={styles.sectionContadorItem__title} id="contadorClientesFijos">+{contador2}<IoMdPerson className={styles.sectionContadorItem_logo}/></p>
                        <p className={styles.sectionContadorItem__subtitle}>Clientes fijos</p>

                    </div>
                </div>
                <div className={styles.sectionContadorItem}>
                    <div className={styles.sectionContadorItemText} data-aos="fade-left">
                        <p className={styles.sectionContadorItem__title} id="contadorMeses">+{contador3}<FaCalendarCheck className={styles.sectionContadorItem_logo}/></p>
                        <p className={styles.sectionContadorItem__subtitle}>Meses comprando</p>
                    </div>
                </div>
            </div>
        </div>


    )
}