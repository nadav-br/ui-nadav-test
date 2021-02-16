import React from 'react';
import { Link } from "react-router-dom";
import NavItems from './NavItems/NavItems'
import './NavBar.scss';

function NavBar() {   

    return (
        <div className="navbar">
            <a href="#" class="logo-company">
                    <img src="logo.png" />
            </a>
            <nav>
                <ul className="navbar-list">
                <Link  to="/home">
                    <NavItems name="Home" />
                </Link>  
                <Link to="/Workflow">
                    <NavItems name="Work flow"/>            
                </Link>
                <Link to="/Statistics">
                    <NavItems name="Statistics"/>            
                </Link>
                <Link to="/Calender">
                    <NavItems name="Calender"/>           
                </Link>
                <Link to="/Users">
                    <NavItems name="Users"/>            
                </Link>
                <Link to="/Settings">
                    <NavItems name="Settings"/>            
                </Link>          
                </ul>  
        </nav>
        </div>
        
    )
}

export default NavBar