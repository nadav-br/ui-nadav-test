import React from 'react'
import FeedTitle from './FeedTitle/FeedTitle'
import ActivitiesList from './FeedList/ActivitiesList'
import './Feeds.scss'

function ActivitiesFeed({count, title, users}) {

    console.log(users)
    return (
        <div className="users-feed">
            <FeedTitle count={count} title={title} />              
            <ActivitiesList users={users} />
        </div>
    )
}

export default ActivitiesFeed
