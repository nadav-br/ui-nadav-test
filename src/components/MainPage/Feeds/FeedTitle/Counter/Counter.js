import React from 'react';
import './Counter.scss';

function Counter({ count, expired}) {
    return (
        <div className="counters-wrapper">
            <div className="counted">{count}</div>
            <div className="expired">{expired}</div> 
        </div>
    )
}

export default Counter
