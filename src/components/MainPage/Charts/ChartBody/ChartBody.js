import React from 'react'
import Img from '../../../../icons/Image/Image'

function ChartBody({image}) {
    return (
        <div>
            <Img className='chart-img' image={image} />
        </div>
    )
}

export default ChartBody
