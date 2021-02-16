import React from 'react'
import FeedTitle from './FeedTitle/FeedTitle'
import UsersList from './FeedList/UsersList'
import './Feeds.scss'

function UsersFeed({count, title, users, handelCounter, image}) {

    console.log(users)
    return (
        <div className="users-feed">
            <FeedTitle count={count} title={title} />              
            <UsersList users={users} />
        </div>
    )
}

export default UsersFeed
