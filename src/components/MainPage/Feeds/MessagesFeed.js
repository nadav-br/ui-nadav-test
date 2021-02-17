import React from 'react'
import FeedTitle from './FeedTitle/FeedTitle'
import MessagesList from './FeedList/MessagesList'
import './Feeds.scss'

function MessagesFeed({count, title, users}) {

    console.log(users)
    return (
        <div className="users-feed">
            <FeedTitle count={count} title={title} />              
            <MessagesList users={users} />
        </div>
    )
}

export default MessagesFeed
