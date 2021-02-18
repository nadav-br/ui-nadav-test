import React from 'react';
import './NavItems.scss';

function NavItems({name ,image}) {
    return (
        <div className="menu-icons-wrap">
            <i className="fas fa-fw fa-chart-area"><img src={image}/></i>
            <span className="menu-name">{name}</span>                 
        </div>
    )
}

export default NavItems
