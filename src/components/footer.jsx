import "../styles/footer.css"
import { Facebook } from "@mui/icons-material"
import { LinkedIn } from "@mui/icons-material"
import { Twitter } from "@mui/icons-material"
import { X } from "@mui/icons-material"
import { GitHub } from "@mui/icons-material"


const handleFacebook = () =>{
    window.open('https://www.facebook.com/share/pcCW6XufzSx6ddAQ/?mibextid=qi2Omg', '_blank');
}
const handleLinkedin= () =>{
    window.open('https://www.linkedin.com/in/william-david-morales-pineda-551589249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
}
const handleX= () =>{
    window.open('https://x.com/DavidMo61863026?t=diqGqaTlmNLPzguZk93URQ&s=09', '_blank');
}
const handleGithub= () =>{
    window.open('https://github.com/ZaliWow', '_blank');
}








export function Footer(params) {
    return(
        <div className="body-footer">
<p>Desing by: William David Morales Pineda || © copyright reserved</p>
<div className="social-media-dev">
<Facebook onClick={handleFacebook} sx={{padding:'10px'}}></Facebook>
<LinkedIn onClick={handleLinkedin} sx={{padding:'10px'}}></LinkedIn>

<X onClick={handleX} sx={{padding:'10px'}}></X>
<GitHub onClick={handleGithub} sx={{padding:'10px'}}></GitHub>
</div>
        </div>
    )
    
}