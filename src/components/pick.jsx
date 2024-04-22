import "../styles/pick.css"
import { useState, useEffect } from "react";
export function WhyPickUs(params) {
    const [animacionVisible, setAnimacionVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const animacionDiv = document.getElementById('Elegirnos');  
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
        <div  id="Elegirnos" className={animacionVisible ?  'animation-pick' : '' }>
        <div className="body-pickUs">
            <h1>¿POR QUÉ ELEGIRNOS?</h1>
            <div className="options">
                <div className="option">
                    <img src="images/mantenimiento.jpg" alt="" />
                    <h2>Resultados probados</h2>
                    <h4>Nuestra trayectoria habla por sí misma. Hemos ayudado a numerosos clientes a alcanzar sus objetivos con éxito, y estamos listos para hacer lo mismo por usted. Nuestro enfoque centrado en resultados garantiza que cada proyecto se complete con eficiencia y efectividad.</h4>
                </div>
                <div className="option">
                    <img src="images/compromiso.jpg" alt="" />
                    <h2>Compromiso con la excelencia</h2>
                    <h4>Desde el primer contacto hasta la entrega final, nos comprometemos a proporcionar un servicio excepcional. Cada proyecto es tratado con la máxima dedicación y atención a los detalles.</h4>

                </div>
                <div className="option">
                    <img src="images/habilidades.jpg" alt="" />
                    <h2>Transparencia y honestidad</h2>
                    <h4>Valoramos la confianza que depositan en nosotros nuestros clientes, por lo que mantenemos una comunicación abierta y transparente en cada etapa del proceso. Nos comprometemos a ser honestos y directos en todas nuestras interacciones.</h4>


                </div>
            </div>
        </div>
        </div>
    )
}