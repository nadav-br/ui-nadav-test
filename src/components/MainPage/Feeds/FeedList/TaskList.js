import React from 'react';
import Img from '../../../../icons/Image/Image';
import './List.scss';
import dotsIcon from '../../../../assets/more-24px.svg'

function TaskList({users}) {
    // console.log(users.map(user => user.message.charAt(0)))
    return (        
        <>
            {users.map(user => {
                return (                                                                            
                    <div className="lists">
                        <div className="letter">{user.message.charAt(0).toUpperCase()}</div>
                        {user.message}
                        <div className={`date ${user.expired ? 'expired' : ''}`}>
                            {user.taskDate}
                        </div>
                        <Img className="more-img" image={dotsIcon} /> 
                    </div> 
                )}
            )}            
        </>
    )
}

export default TaskList
