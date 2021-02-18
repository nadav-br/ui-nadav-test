import React from 'react';
import { Link } from "react-router-dom";
import NavItems from './NavItems/NavItems'
import Img from '../../icons/Image/Image'
import Logo from '../../assets/logo_merkury.png';
import LogoSmall from '../../assets/logo_merkury_small.png';
import home from '../../assets/home.svg';
import workFlow from '../../assets/agenda.svg';
import statistics from '../../assets/small_chart.svg';
import calendar from '../../assets/date_range.svg';
import users from '../../assets/people.svg';
import settings from '../../assets/settings.svg';
import './NavBar.scss';

function NavBar() {   

    return (
        <aside className="navbar">
            <a href="#" className="logo-company">
                <Img image={Logo} />
                <span className="logo-small">
                    <img src={LogoSmall} />
                </span>
            </a>
            <nav>
                <div className="navbar-list">
                    <Link  to="/ui-nadav-test">
                        <NavItems name="Home" image={home} />
                    </Link>  
                    <Link to="/ui-nadav-test/Workflow">
                        <NavItems name="Work flow" image={workFlow}/>            
                    </Link>
                    <Link to="/ui-nadav-test/Statistics">
                        <NavItems name="Statistics" image={statistics} />            
                    </Link>
                    <Link to="/ui-nadav-test/Calender">
                        <NavItems name="Calender" image={calendar} />           
                    </Link>
                    <Link to="/ui-nadav-test/Users">
                        <NavItems name="Users" image={users} />            
                    </Link>
                    <Link to="/ui-nadav-test/Settings">
                        <NavItems name="Settings" image={settings} />            
                    </Link>          
                </div>  
            </nav>
        </aside>
        
    )
}

export default NavBar