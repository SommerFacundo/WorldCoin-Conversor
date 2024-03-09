import { Navbar } from './components/navbar/Navbar';
import './App.css';
import { FirstSectionPrincipal } from './components/sections/firstDisplayPrincipal/firstSectionPrincipal';
import { SectionContadoresEstadisticas } from './components/sections/sectionContadoresEstadisticas/sectionContadoresEstadisticas';
import { useEffect,useState } from 'react';
import AOS from "aos"
import { SectionReferencias } from './components/sections/referencias/sectionReferencias';
import { SectionVentaMonedas } from './components/sections/sectionVentaMonedas/sectionVentaMonedas';
import { NavbarResponsive } from './components/navBarResponsive/navBarResponsive';
function App() {
  const [ancho, setAncho] = useState(window.innerWidth);
  const [alto, setAlto] = useState(window.innerHeight);
  useEffect(()=>{
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease', // Tipo de animación
      once: true // La animación se ejecuta solo una vez

  })

  const actualizarDimensiones = () => {
    setAncho(window.innerWidth);
    setAlto(window.innerHeight);
  };
    
   window.addEventListener('resize', actualizarDimensiones);
  },[])

  return (
    <div className="App">
      {ancho <= 768 ? <NavbarResponsive/> :<Navbar/>}
      <FirstSectionPrincipal/>
      <SectionContadoresEstadisticas/>
      <SectionReferencias/>
      <SectionVentaMonedas/>
    </div>
  );
}

export default App;