import React from 'react';
import './NavItems.scss'

function NavItems({name}) {
    return (
        <div>
            {/* <ul className="navbar-items"> */}
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>{name}</span>
                    </a>
                </li>                
            {/* </ul> */}
        </div>
    )
}

export default NavItems
