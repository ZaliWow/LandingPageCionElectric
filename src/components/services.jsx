import "../styles/services.css"
import { Button } from "@mui/material"
import { WhatsappButton } from "./whatsappButton"
export function Services({ }) {
    return (

        <div className="body-services">
            <h1>NUESTROS SERVICIOS</h1>
            <h3>
                Excelentes estándares de calidad y la mejor atención en una combinación para brindar una gran atención al cliente
            </h3>
            <div className="services">
                <div className="service">
                    <h2>Mantenimiento residencial</h2>
                    <h4>Revisamos tu hogar para asegurar el correcto funcionamiento de todo tu cableado electrico, detectando cortos, malas conexiones o posibles fallos que puedan generar problemas eléctricos a futuro. </h4>
                    <WhatsappButton></WhatsappButton>
                </div>
                <div className="service">
                    <h2>Instalación y cableado eléctrico</h2>
                    <h4>Realizamos la instalación de empotrados, haciendo las regatas para colocar tus tubos y el cableado además de el sobre poner donde instalamos tus canaletas con los cables. </h4>
                    <WhatsappButton></WhatsappButton>

                </div>
                <div className="service">
                    <h2>Instalación en casas residenciales</h2>
                    <h4>Realizamos la instalación de todo el cableado eléctrico de tu hogar, además de los tomas interruptores y luces.</h4>
                    <WhatsappButton></WhatsappButton>

                </div>
            </div>
        </div>
    )

}