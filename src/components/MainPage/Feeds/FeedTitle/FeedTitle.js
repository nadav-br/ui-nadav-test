import React from 'react'
import Counter from './Counter/Counter'
import './FeedTitle.scss'

function FeedTitle({title, count, expired}) {
    return (
        <div className="feed-title">
            <h4>{title}</h4>
            <Counter count={count} expired={expired} />               
        </div>
    )
}

export default FeedTitle
