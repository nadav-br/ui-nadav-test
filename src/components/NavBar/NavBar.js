import React from 'react';
import { Link } from "react-router-dom";
import NavItems from './NavItems/NavItems'
import Img from '../../icons/Image/Image'
import Logo from '../../assets/logo_merkury.png';
import './NavBar.scss';

function NavBar() {   

    return (
        <aside className="navbar">
            <a href="#" className="logo-company">
                    <Img image={Logo} />
            </a>
            <nav>
                <div className="navbar-list">
                <Link  to="/ui-nadav-test">
                    <NavItems name="Home" />
                </Link>  
                <Link to="/ui-nadav-test/Workflow">
                    <NavItems name="Work flow"/>            
                </Link>
                <Link to="/ui-nadav-test/Statistics">
                    <NavItems name="Statistics"/>            
                </Link>
                <Link to="/ui-nadav-test/Calender">
                    <NavItems name="Calender"/>           
                </Link>
                <Link to="/ui-nadav-test/Users">
                    <NavItems name="Users"/>            
                </Link>
                <Link to="/ui-nadav-test/Settings">
                    <NavItems name="Settings"/>            
                </Link>          
                </div>  
            </nav>
        </aside>
        
    )
}

export default NavBar