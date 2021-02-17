import React from 'react'
import Img from '../../../../icons/Image/Image'
import './List.scss'
function TaskList({users}) {
    
    return (
        
        <div>
            {users.map(user => {
                return (
                    // <li>                                                                              
                        <div className="lists">
                            <Img image={user.image} />
                            {user.message}
                            <div className="date">{user.taskDate}</div>
                            <Img className="more-img" image={user.more} /> 
                        </div>                                                                            
                    // </li>
                )}
            )}            
        </div>
    )
}

export default TaskList
