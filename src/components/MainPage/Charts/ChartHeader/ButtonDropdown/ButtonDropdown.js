import React from 'react';
import './ButtonDropdown.scss';

function ButtonDropdown() {
    
    return (
        <div class="select-dropdown">
            <select className='chart-select'>
                <option className='chart-option'>Period: </option>
                <option >Last week</option>
                <option >Last mounth</option>
                <option >Last year</option>
            </select>
        </div>
    )
}

export default ButtonDropdown
