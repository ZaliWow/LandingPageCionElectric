import "../styles/contact.css"

export function Contact() {
    return (
        <div className="body-contact">
            <h1>CONTACTO</h1>
            <div className="grids-inputs">
                <input type="text" class="input1" placeholder="Nombres" />
                <input type="text" class="input1" placeholder="Correo Electronico" />
                <input type="text" class="input1" placeholder="Telefono" />
                <input type="text" class="input1" placeholder="Empresa" />
                <input type="text" class="input2" placeholder="Mensaje" />
            </div>

        </div>
    )
}