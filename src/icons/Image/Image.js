import React from 'react'

function Image({image}) {
    console.log(image)
    return (
        <div>
            <img src={image} />
        </div>
    )
}

export default Image