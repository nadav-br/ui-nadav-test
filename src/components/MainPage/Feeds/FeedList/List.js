import React from 'react';
import Img from '../../../../icons/Image/Image';
import './List.scss';
import dotsIcon from '../../../../assets/more-24px.svg';
import userImg from '../../../../assets/user-24px.svg';

function List({users, type}) {
// debugger
    const typeItems = {
        tasks: (user) => {
            return (
                <div className="lists">
                    <span className="letter">{user.message.charAt(0).toUpperCase()}</span>
                    <div className="title-and-date">
                        <p>{user.message}</p> 
                        <span className={`date ${user.expired ? 'expired' : ''}`}>
                            {user.taskDate}
                        </span>
                    </div>
                     <span className="more-icon">
                        <Img className="more-img" image={dotsIcon} /> 
                        </span>
                    </div> 
            )            
        },
        messages: (user) => {
            return (
                <div className={`lists ${user.isClicked ? 'clicked' : ''}`}> 
                    <span className="user-icon">
                        <Img className="user-image" image={ userImg } /> 
                    </span>
                    <p className="user-text">
                        <strong> {user.name} </strong>
                        <span>    
                            {user.message}
                        </span>                   
                    </p>                  
                </div>
            )                    
        },
        activities: (user) => {
            return (
                <div className="lists"> 
                    <span className="user-icon">
                        <Img className="user-image" image={/*"/" + user.image*/  userImg } />
                    </span>
                    <p className="user-text">
                        <strong> {user.name} </strong>
                        <span>    
                        {user.activity}</span>                   
                    </p> 
                </div>
            )             
        }
    }

    return (        
        <div className="body-wrapper">
            {users.map(user => {
                return (                                                                            
                    typeItems[type](user)
                )}
            )}            
        </div>
    )
}

export default List
