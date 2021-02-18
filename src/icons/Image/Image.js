import React from 'react'

function Image({image}) {
    console.log(image)
    return (
        <span>
            <img src={image}   />
        </span>
    )
}

export default Image