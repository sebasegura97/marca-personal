import React from 'react'
import './mas.css'
import image2 from '../../assets/image2.png'
import ReactModal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import fbBots from '../../assets/galleryTitulos/diploma-bots-fb.png'
import desarrolloReact from '../../assets/galleryTitulos/diploma-desarrollo-react.png'
import interfaces from '../../assets/galleryTitulos/diploma-diseno-interfaces-ux.png'
import graphql from '../../assets/galleryTitulos/diploma-graphql.png'
import css3 from '../../assets/galleryTitulos/diploma-html5-css3.png'
import illustrator from '../../assets/galleryTitulos/diploma-illustrator.png'
import reactNative from '../../assets/galleryTitulos/diploma-react-native.png'
import react from '../../assets/galleryTitulos/diploma-react.png'
import redux from '../../assets/galleryTitulos/diploma-redux.png'
import responsive from '../../assets/galleryTitulos/diploma-responsive-design.png'


class Mas extends React.Component {
    state = {
        modalVisible: false,
    }
    onOpenModal = () => {
        this.setState({ modalVisible: true });
    };

    onCloseModal = () => {
        this.setState({ modalVisible: false });
    };
    verCertificados = () =>{
        this.setState({
            modalVisible: true
        })
    }
    
    
    render(){
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
                    </p>

                    <button onClick={this.verCertificados} className="verCertificado">
                            ver certificados
                    </button>
                    
                </article>
                <ReactModal
                    isOpen={this.state.modalVisible}
                    className="Modal"
                    overlayClassName="Overlay"
                    ariaHideApp={false}
            
                >
                    <button 
                        className="closeModal"
                        onClick={this.onCloseModal}
                    >
                        X
                    </button>
                    <Carousel
                        showArrows={true}
                        
                    >
                        <div>
                            <img src={desarrolloReact} alt="titulo de platzi" />
                        </div>

                        <div>
                            <img src={react} />
                        </div>

                        <div>
                            <img src={reactNative} />
                        </div>

                        <div>
                            <img src={redux} />
                        </div>

                        <div>
                            <img src={graphql} />
                        </div>

                        <div>
                            <img src={fbBots} />
                        </div>

                        <div>
                            <img src={interfaces} />
                        </div>

                        <div>
                            <img src={responsive} />
                        </div>

                        <div>
                            <img src={css3} />
                        </div>

                        <div>
                            <img src={illustrator} />
                        </div>
                    </Carousel>
                </ReactModal>
            </section>
        )
    }
}

export default Mas