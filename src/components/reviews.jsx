import "../styles/reviews.css"
import { Avatar } from "@mui/material"
import { Facebook } from "@mui/icons-material"
import { Twitter } from "@mui/icons-material"

export function ReviewsComponent(){
    return(
        <div className="body-reviews">
            <h1>Estudios y Experiencia</h1>


<div className="reviews">
    <div className="review">
    <h3>Tecnico en instalaciones de redes eléctricas</h3>
        <h4>Título con honores en el centro de estudios técnicos laborales de colombia, <span>CESTELCO</span>.</h4>
     <div className="contact">
    <Avatar>
    </Avatar>
   
   
   </div>
  
   <div className="social-media">
   
    <Facebook></Facebook>
    <Twitter sx={{marginRight:'80px', marginLeft:'10px'}}></Twitter>
    </div>
    </div>
    <div className="review">
    <h3>Experiencia en instalaciones de redes eléctricas en el <span>Dovio valle</span>.</h3>
        <h4>Ya hemos realizado instalaciones de redes eléctricas completas a hogares dentro de la región</h4>

 <div className="contact">
    <Avatar>
    </Avatar>
   
   
   </div>
  
   <div className="social-media">
   
    <Facebook></Facebook>
    <Twitter sx={{marginRight:'80px', marginLeft:'10px'}}></Twitter>
    </div>
    </div>
     <div className="review">

        <h3>Monografía; sistema solar fotovoltaico</h3>
        <h4>Hemos realizado estudios para el aprovechamiento de la energía solar dentro de la <span>avícultura</span> y <span>acuicultura</span>.</h4>
   <div className="contact">
    <Avatar>
    </Avatar>
   
   
   </div>
  
   <div className="social-media">
   
    <Facebook></Facebook>
    <Twitter sx={{marginRight:'80px', marginLeft:'10px'}}></Twitter>
    </div>
    </div>
    

</div>


        </div>
    )
}