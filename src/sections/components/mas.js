import React from 'react'
import './mas.css'
import image2 from '../../assets/image2.png'
function Mas() {
    return (
        <section className="estudios-container mas-container">
            <h2>mas sobre mi</h2>
            <article className="small-article mas-article"
                     style={{ backgroundImage: `url(${image2})` }}
            >
                <div className="horizontal-line-pink" />
                <p className="mas-text">
                    Tengo 21 años, actualmente me encuentro buscando ganar experiencia laboral, mientras termino de estudiar.
                    Aprendo rapido y soy eficiente resolviendo problemas. <br/> Me interesa todo lo que tenga una computadora de por medio.
                    Tengo certificados algunos cursos online, orientados principalmente a la programacion web y movil, pero tambien complementados con cursos de diseño de interfaces y experiencia de usuario
                    <a>
                            ver certificados
                    </a>
                </p>
                
            </article>
        </section>
    )
}

export default Mas