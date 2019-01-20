import React from 'react'
import './skills.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.jpg'
import firebase from '../../assets/firebase.png'

function Skills() {
    return (
        <section className="estudios-container skills-desktop">
            <h2 className="skills-title">skills</h2>
            <article className="small-article skills-article">
                <div className="horizontal-line-pink" />
                <div className="text">
                    <h3 className="title-skills">
                        Desarrollo web
                    </h3>
                </div>
                <div className="images-container">
                    <div className="skill-container">
                        <img className="skills-image skills-image-desktop" src={html} alt="logo de html"/>
                        <p>HTML5</p>
                    </div>
                    <div className="skill-container">
                        <img className="skills-image skills-image-desktop" src={css} alt="logo de css" />
                        <p>CSS3</p>
                    </div>
                    <div className="skill-container">
                        <img className="skills-image skills-image-desktop" src={js} alt="logo de js" />
                        <p>JAVASCRIPT</p>
                    </div>
                    <div className="skill-container">
                        <img className="skills-image skills-image-desktop" src={react} alt="logo de react" />
                        <p>REACT JS</p>
                    </div>
                    <div className="skill-container">
                        <img className="skills-image skills-image-desktop" src={redux} alt="logo de redux" />
                        <p>REDUX</p>
                    </div>
                </div>
            </article>

            <article className="small-article skills-article">
                <div className="horizontal-line-pink" />
                <div className="text">
                    <h3 className="title-skills">
                        Desarrollo movil
                    </h3>
                </div>
                <div className="images-container">
                    <div className="skill-container">
                        <img className="skills-image skills-image-desktop" src={react} alt="logo de react" />
                        <p>REACT NATIVE</p>
                    </div>
                    <div className="skill-container">
                        <img className="skills-image skills-image-desktop" src={redux} alt="logo de redux" />
                        <p>REDUX</p>
                    </div>
                    <div className="skill-container">
                        <img className="skills-image firebase-image skills-image-desktop" src={firebase} alt="logo de firebase" />
                        <p>FIREBASE</p>
                    </div>
                </div>
            </article>
            
        </section>
    )
}

export default Skills