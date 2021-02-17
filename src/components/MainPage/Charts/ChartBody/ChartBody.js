import React from 'react';
import Img from '../../../../icons/Image/Image';
import './ChartBody.scss';

function ChartBody({image}) {
    
    return (
        <div className='chart-img'>
            <Img image={image} />
        </div>
    )
}

export default ChartBody
