import React from 'react'
import './modal.css'


function Modal(props){
    if (props.modalVisible) {
        var body = document.getElementById("body");
        body.style.overflow = "hidden";
        return(
            <div className="modal">
                {props.children}
            </div>
        )
    }
    else{
        return(
            <span/>
        )
    }
}

export default Modal;