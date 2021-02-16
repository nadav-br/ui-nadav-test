import React from 'react'
import Counter from './Counter/Counter'
import './FeedTitle.scss'

function FeedTitle({title, count, expired}) {
    return (
        <div className="feed-title">
            <h3>{title}</h3>
            <Counter count={count} expired={expired} />               
        </div>
    )
}

export default FeedTitle
