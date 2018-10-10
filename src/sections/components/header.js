import React from 'react'
import './header.css'

function Header(props){
    return(
        <header className="header">
            <h1 className="header-name">
                Sebastian Segura
            </h1>
            {props.children}
        </header> 
    )   
}

export default Header