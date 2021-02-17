import React from 'react';
import Img from '../../../../icons/Image/Image';
import './List.scss';

function MessagesList({users}) {
    
    return (
        <> 
            {users.map(user => {
                return (                                                                            
                    <div className={`lists ${user.isClicked ? 'clicked' : ''}`}> 
                        <Img image={"/" + user.image} /> 
                        {user.name} 
                        {user.message}
                    </div>
                )}
            )}            
        </>
    )
}

export default MessagesList
