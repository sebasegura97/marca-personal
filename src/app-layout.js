import React from 'react'
import './app-layout.css'

function AppLayout(props){
    return(
        <div className="app-layout">
            {props.children}
        </div>
    )
}

export default AppLayout