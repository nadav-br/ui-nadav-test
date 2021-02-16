import React from 'react'

function ButtonDropdown() {
    return (
        <div>
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
