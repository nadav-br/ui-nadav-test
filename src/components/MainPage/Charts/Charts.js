import React from 'react';
import ChartHeader from './ChartHeader/ChartHeader';
import ChartBody from './ChartBody/ChartBody';
import './Charts.scss';

function Charts({title, image}) {
    return (
        <div class="chart-wrap">
            <ChartHeader title={title} />     
            <ChartBody image={image} />
        </div>
    )
}

export default Charts
