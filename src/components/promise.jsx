import "../styles/promise.css"

const phoneNumber = '+573173468485';

const message = '¡Hola! ¿Cómo estás? Quisiera cotizar tus servicios de CIONELECTRIC.';

const handleSendMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};


import { Button } from "@mui/material"

export function Promise({ }) {
    return (
        <div className="boddy">
            <h1>Reparaciones y mantenimientos electricos <span>Dovio Valle del Cauca</span></h1>
            <h3>¿Necesitas realizar instalaciones electricas en tu hogar y vives en el Dovio Valle o zonas aledañas? <span>¡estás en el lugar indicado!</span></h3>
            <Button onClick={handleSendMessage} sx={{ backgroundColor: 'yellow', color: 'black', marginTop: '50px', padding: '20px', borderRadius: '10px', ":hover": { color: 'white', border: '1px solid yellow' } }}>Realizar instalaciones</Button>
            <div className="logos-aliados">

            </div>


        </div>
    )
}