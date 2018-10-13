import React from 'react'
import './desktop-layout.css'

function AppLayout(props) {
    return (
        <div className="desktop-layout">
            {props.children}
        </div>
    )
}

export default AppLayout