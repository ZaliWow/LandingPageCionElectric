import "../styles/aboutus.css"
import { useState, useEffect } from "react";
export function AboutUS(params) {

    const [animacionVisible, setAnimacionVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const animacionDiv = document.getElementById('Sobre Nosotros');  
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
        <div id="Sobre Nosotros" className={animacionVisible ?  'animation-aboutus' : '' }>
        <div className="body-aboutUs">
            <div className="aboutUs">
                <h1>SOBRE NOSOTROS</h1>
                <h4>Somos una pequeña pero apasionada empresa ubicada en el hermoso municipio de El Dovio, en el Valle del Cauca, Colombia. En <span>CIONELECTRIC</span>, nos especializamos en proporcionar soluciones integrales en instalaciones eléctricas para nuestros clientes en toda la región.
                    Desde nuestra fundación, hemos estado comprometidos con la excelencia, la seguridad y la satisfacción del cliente.
                </h4>
                <h4>En <span>CIONELECTRIC</span>, entendemos la importancia de tener un sistema eléctrico confiable y eficiente. Es por eso que nos esforzamos por ofrecer servicios de la más alta calidad, utilizando las últimas tecnologías y cumpliendo con los estándares más exigentes de la industria.</h4>
                <h4>Nos enorgullece ser parte de la comunidad de El Dovio y del Valle del Cauca, y nos comprometemos a seguir sirviendo a nuestros clientes con integridad, profesionalismo y dedicación.</h4>
            </div>
            <div className="body-aboutUs-img">
                <img className={animacionVisible ?  'rotate-scale-up' : '' } src="images/cionelectric.jpg" alt="" />
            </div>

        </div>
        </div>
    )

}