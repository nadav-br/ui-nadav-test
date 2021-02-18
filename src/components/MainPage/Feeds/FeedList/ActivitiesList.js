import React from 'react';
import Img from '../../../../icons/Image/Image';
import './List.scss';
import userImg from '../../../../assets/user-24px.svg'

function ActivitiesList({users}) {
    
    return (
        <> 
            {users.map(user => {
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
                )}
            )}            
        </>
    )
}

export default ActivitiesList
