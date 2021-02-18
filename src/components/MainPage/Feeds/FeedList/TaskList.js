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
                )}
            )}            
        </>
    )
}

export default TaskList
