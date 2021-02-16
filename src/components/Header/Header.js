import React from 'react';
import './Header.scss'
import search from "../../assets/search-24px.svg"
import mail from "../../assets/mail-24px.svg"
import notify from "../../assets/notification-24px.svg"
import user from "../../assets/user-24px.svg"
import Button from '../../icons/button/Button'
import Img from '../../icons/Image/Image'
import Burger from '../../icons/Burger/Burger'

function Header() {
       
    return (
        <div className="header">
                <Burger />
                <Img image={search} />
                <Button name="+ Add Project" />
                <Img image={mail} />
                <Img image={notify} />
                <Img image={user} />
                
        </div>
    )
}

export default Header
