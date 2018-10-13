import React from 'react'
import './redes.css'
import phone from '../../assets/phone.svg'
import instagram from '../../assets/instagram.svg'
import wpp from '../../assets/wpp.svg'

function Redes() {
    return (
        <section className="estudios-container redes-desktop">
            <h2 className="redes-title">redes</h2>
            <article className="small-article redes-article">
                <div className="horizontal-line-pink redes-line" />
                <div className="images-container redes-container">
                    <a
                        className="contactoAncla"
                        href="https://api.whatsapp.com/send?phone=5493874748181"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="skill-container">
                            <img className="skills-image redes-image" src={wpp} alt="logo de wpp" />
                            <p className="redes-text">WhatsApp</p>
                        </div>
                    </a>
                    <a
                        className="contactoAncla"
                        href="https://www.instagram.com/sebaasegura/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="skill-container">
                            <img className="skills-image redes-image" src={instagram} alt="logo de instagram" />
                            <p className="redes-text">Instagram</p>
                        </div>
                    </a>
                    <a
                        className="contactoAncla"
                        href="tel:+543874748181"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="skill-container">
                            <img className="skills-image redes-image" src={phone} alt="icono de telefono" />
                            <p className="redes-text">Telefono</p>
                        </div>
                    </a>
                    
                </div>
            </article>
        </section>
    )
}

export default Redes