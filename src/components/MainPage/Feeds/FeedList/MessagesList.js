import React from 'react'
import Img from '../../../../icons/Image/Image'
import './List.scss'

function MessagesList({users}) {
    
    return (
        <div> 
            {users.map(user => {
                return (                                                                            
                    <div className="lists users"> <Img image={user.image} /> {user.name} {user.message}</div>
                )}
            )}            
        </div>
    )
}

export default MessagesList
