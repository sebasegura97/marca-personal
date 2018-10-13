import React from 'react'
import image1 from '../../assets/image1.png'
import './resumen.css'

function Resumen(props){
    return(
        <section className="resumen-container resumen-margin">
            <img 
                src={image1} 
                alt="una foto mia"
                className="resumen-image"
            />
            <article className="article article-resumen">
                <h1 className="name">Sebastian Segura</h1>
                <p className="description">Programador frontend - 
                    <br/> Estudiante de ingenieria en informatica
                </p>
                <div className="horizontal-line"/>
                <p className="sobremi">SOBRE MI:</p>
                <div className="resumen-item">
                    <p className="item-highlight">Nombre:</p>
                    <p className="item-value">Sebastian Segura</p>
                </div>
                <div className="resumen-item">
                    <p className="item-highlight">Edad:</p>
                    <p className="item-value">21 años - 21/01/1997</p>
                </div>
                <div className="resumen-item">
                    <p className="item-highlight">De:</p>
                    <p className="item-value">Salta - Argentina</p>
                </div>
                <div>
                   {props.children}    
                </div> 

            </article>

        </section>
        
    )
}

export default Resumen