import React from 'react';
import ButtonDropdown from './ButtonDropdown/ButtonDropdown';
import './ChartHeader.scss';

function ChartHeader({title}) {
    return (
        <div className="chart-header">
            <h3>{title}</h3>
            <ButtonDropdown />
        </div>
    )
}

export default ChartHeader
