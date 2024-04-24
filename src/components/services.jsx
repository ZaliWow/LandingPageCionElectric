import "../styles/services.css"
import { Button } from "@mui/material"
import { useState, useEffect } from "react";
import { WhatsappButton } from "./whatsappButton"
export function Services({ }) {
    const [animacionVisible, setAnimacionVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const animacionDiv = document.getElementById('Servicios');  
            if (animacionDiv) {
                const rect = animacionDiv.getBoundingClientRect();
                const isVisible = (
                    rect.top <= window.innerHeight &&
                    rect.bottom >= 0 &&
                    rect.left <= window.innerWidth &&
                    rect.right >= 0
                );
                if (isVisible) {
                  console.log("se esta viendo")
                    setAnimacionVisible(true);
                    window.removeEventListener('scroll', handleScroll);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
<div id="Servicios" className={animacionVisible ?  'animation-services' : '' } >
        <div className="body-services">
            <h1>NUESTROS SERVICIOS</h1>
            <h4>
                Excelentes estándares de calidad y la mejor atención en una combinación para brindar una gran atención al cliente
            </h4>
            <div className="services">
                <div className="service">
                    <h5>Mantenimiento residencial</h5>
                    <h1>+3</h1>
                    <p>mantenimientos totales</p>
                    <WhatsappButton></WhatsappButton>
                </div>
                <div className="service">
                    <h5>Instalación y cableado eléctrico</h5>
                    <h1>+5</h1>
                    <p>instalaciones totales</p>
                    <WhatsappButton></WhatsappButton>

                </div>
                <div className="service">
                    <h5>Instalación en casas residenciales</h5>
                    <h1>+2</h1>
                    <p>instalaciones a casas residenciales</p>
                    <WhatsappButton></WhatsappButton>

                </div>
            </div>
        </div>
</div>
    )

}