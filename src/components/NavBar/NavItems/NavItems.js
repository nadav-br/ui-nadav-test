import React from 'react';
import './NavItems.scss'

function NavItems({name}) {
    return (
        <>
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>{name}</span>                 
        </>
    )
}

export default NavItems
