import "../styles/carrete.css"


export function CarretePhotos(){
    return(
        <div className="body-carrete">
            <h1>Nuestro trabajo</h1>
            <h4>Estos son algunos de los trabajos que hemos realizado dentro de <span>CIONELECTRIC</span></h4>
            <div className="images-carrete">
                <div className="body-carrete-img"><img src="images/trabajo1.jpg" alt="" /></div>
                <div className="body-carrete-img"><img src="images/trabajo2.jpg" alt="" /></div>
                <div className="body-carrete-img"><img src="images/trabajo3.jpg" alt="" /></div>
                <div className="body-carrete-img"><img src="images/trabajo4.jpg" alt="" /></div>
                
            </div>
        </div>
    )
}