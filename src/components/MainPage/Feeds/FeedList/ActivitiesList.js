import React from 'react';
import Img from '../../../../icons/Image/Image';
import './List.scss';

function ActivitiesList({users}) {
    
    return (
        <> 
            {users.map(user => {
                return (                                                                            
                    <div className="lists">
                        <Img image={"/" + user.image} /> 
                        {user.name} 
                        {user.activity}
                    </div>
                )}
            )}            
        </>
    )
}

export default ActivitiesList
