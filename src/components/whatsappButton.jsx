import { Button } from "@mui/material";
export function WhatsappButton(params) {
  const phoneNumber = '+573173468485';
  // Mensaje que deseas enviar
  const message = '¡Hola! ¿Cómo estás? Quisiera cotizar tus servicios de CIONELECTRIC.';

  // Función para abrir la ventana de WhatsApp con el mensaje predefinido
  const handleSendMessage = () => {
    // Construye la URL de WhatsApp con el número y el mensaje
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Abre la URL en una nueva pestaña
    window.open(url, '_blank');
  };
  return (
    <Button onClick={handleSendMessage} variant='dark' sx={{ backgroundColor: 'yellow', color: 'black', borderRadius: '10px', padding: '10px', ":hover": { color: 'white', border: '1px solid yellow' } }}>Cotizar</Button>

  )
}