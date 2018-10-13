import React from 'react'
import './app-layout.css'
import background from './assets/background.jpg'

function AppLayout(props){
    return(
        <div className="app-layout"
        >
            {props.children}
        </div>
    )
}

export default AppLayout