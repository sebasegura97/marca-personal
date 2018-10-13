import React from 'react'
import './estudios.css'
function Estudios(){
    return(
        <section className="estudios-container estudios-desktop">
            <h2>estudios</h2>
            <article className="estudios-article">
                <div className="horizontal-line-pink"/>
                <div className="text">
                    <h3>
                        Ingenieria en informática
                    </h3>
                    <p className="article-p" >
                        Cursando tercer año
                    </p>
                </div>
            </article>
            <article className="estudios-article">
                <div className="horizontal-line-pink"/>
                <div className="text">
                    <h3>
                         Bachiller en economia y administracion de empresas
                    </h3>
                    <p className="article-p" >
                        Colegio Salesiano Angel Zerda
                    </p>
                </div>
            </article>
        </section>
    )
}

export default Estudios