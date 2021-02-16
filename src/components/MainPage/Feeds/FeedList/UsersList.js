import React from 'react'
import Img from '../../../../icons/Image/Image'
function UsersList({image, name, users}) {
    
    return (
        <div> 
            {users.map(user => {
                return (
                    // <li >                                                                              
                        <div> <Img image={user.image} /> {user.name} </div>                                                                            
                    // </li>
                )}
            )}
            
        </div>
    )
}

export default UsersList
