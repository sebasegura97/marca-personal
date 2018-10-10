import React from 'react'
import './portfolio.css'
import github from '../../assets/github.svg'
import dayspa from '../../assets/dayspa.svg'
import tasafin from '../../assets/tasafin.svg'
import cayro from '../../assets/cayro.svg'
import snap from '../../assets/snap.svg'


function Portfolio() {
    return (
        <section className="portfolio-container">
            <h2>portfolio</h2>
            <div className="portfolio-flex">
                <article className="small-article small-article-portfolio">
                    <a href="https://github.com/sebasegura97" target='_blank' rel="noopener noreferrer">
                        <div className="horizontal-line-pink" />
                        <div className="images-container images-container-portfolio ">
                            <div className="portfolio-item-container">
                                <img className="skills-image" src={github} alt="logo de html" />
                                <p className="portfolio-text">GITHUB</p>
                            </div>
                        </div>
                    </a>
                </article>
                <article className="small-article small-article-portfolio">
                    <a href="https://dayspasalta.com" target='_blank' rel="noopener noreferrer">
                        <div className="horizontal-line-pink" />
                        <div className="images-container images-container-portfolio ">
                            <div className="portfolio-item-container">
                                <img className="skills-image" src={dayspa} alt="logo de html" />
                                <p className="portfolio-text">DAY SPA</p>
                            </div>
                        </div>
                    </a>
                </article>
                <article className="small-article small-article-portfolio">
                    <a href="https://tasafin.com" target='_blank' rel="noopener noreferrer">
                        <div className="horizontal-line-pink" />
                        <div className="images-container images-container-portfolio ">
                            <div className="portfolio-item-container">
                                <img className="skills-image" src={tasafin} alt="logo de html" />
                                <p className="portfolio-text">TASAFIN</p>
                            </div>
                        </div>
                    </a>
                </article>
                <article className="small-article small-article-portfolio">
                    <a href="https://cayrosalta.com" target='_blank' rel="noopener noreferrer">
                        <div className="horizontal-line-pink" />
                        <div className="images-container images-container-portfolio ">
                            <div className="portfolio-item-container">
                                <img className="skills-image" src={cayro} alt="logo de html" />
                                <p className="portfolio-text">CAYRO</p>
                            </div>
                        </div>
                    </a>
                </article>
                <article className="small-article small-article-portfolio">
                    <a href="https://sketch.cloud/s/rrpgG/e7nyg2/play" target='_blank' rel="noopener noreferrer">
                        <div className="horizontal-line-pink" />
                        <div className="images-container images-container-portfolio ">
                            <div className="portfolio-item-container">
                                <img className="skills-image" src={snap} alt="logo de html" />
                                <p className="portfolio-text">SNAP MARKET</p>
                            </div>
                        </div>
                    </a>
                </article>
                
            </div>
            

        </section>
    )
}

export default Portfolio