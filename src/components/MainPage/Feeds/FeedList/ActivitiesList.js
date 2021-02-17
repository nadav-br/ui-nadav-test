import React from 'react'
import Img from '../../../../icons/Image/Image'
import './List.scss'

function ActivitiesList({users}) {
    
    return (
        <div> 
            {users.map(user => {
                return (                                                                            
                    <div className="lists users"> <Img image={user.image} /> {user.name} {user.activity}</div>
                )}
            )}            
        </div>
    )
}

export default ActivitiesList
