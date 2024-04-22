import "../styles/reviews.css"
import { useState, useEffect } from "react";


export function ReviewsComponent() {
    const [animacionVisible, setAnimacionVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const animacionDiv = document.getElementById('Estudios');  
            if (animacionDiv) {
                const rect = animacionDiv.getBoundingClientRect();
                const isVisible = (
                    rect.top <= window.innerHeight &&
                    rect.bottom >= 0 &&
                    rect.left <= window.innerWidth &&
                    rect.right >= 0  );
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
        <div id="Estudios" className={animacionVisible ?  'animation-reviews' : '' }>
        <div className="body-reviews">
            <h1>Estudios y Experiencia</h1>


            <div className="reviews">
                <div className="review">
                    <h3>Tecnico en instalaciones de redes eléctricas</h3>
                    <h4>Título con honores en el centro de estudios técnicos laborales de colombia, <span>CESTELCO</span>.</h4>



                </div>
                <div className="review">
                    <h3>Experiencia en instalaciones de redes eléctricas en el <span>Dovio valle</span>.</h3>
                    <h4>Ya hemos realizado instalaciones de redes eléctricas completas a hogares dentro de la región</h4>




                </div>
                <div className="review">

                    <h3>Monografía; sistema solar fotovoltaico</h3>
                    <h4>Hemos realizado estudios para el aprovechamiento de la energía solar dentro de la <span>avícultura</span> y <span>acuicultura</span>.</h4>



                </div>


            </div>


        </div>
        </div>
    )
}