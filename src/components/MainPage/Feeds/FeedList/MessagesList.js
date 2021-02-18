import React from 'react';
import Img from '../../../../icons/Image/Image';
import './List.scss';
import userImg from '../../../../assets/user-24px.svg'

function MessagesList({users}) {
    
    return (
        <> 
            {users.map(user => {
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
                )}
            )}            
        </>
    )
}

export default MessagesList
