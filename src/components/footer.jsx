import "../styles/footer.css"
import { Facebook } from "@mui/icons-material"
import { LinkedIn } from "@mui/icons-material"
import { Twitter } from "@mui/icons-material"
import { X } from "@mui/icons-material"
import { GitHub } from "@mui/icons-material"



export function Footer(params) {
    return(
        <div className="body-footer">
<p>Desing by: William David Morales Pineda || © copyright reserved</p>
<div className="social-media-dev">
<Facebook sx={{padding:'10px'}}></Facebook>
<LinkedIn sx={{padding:'10px'}}></LinkedIn>
<Twitter sx={{padding:'10px'}}></Twitter>
<X sx={{padding:'10px'}}></X>
<GitHub sx={{padding:'10px'}}></GitHub>
</div>
        </div>
    )
    
}