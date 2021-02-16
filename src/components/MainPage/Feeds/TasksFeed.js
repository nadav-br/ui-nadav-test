import React from 'react';
import FeedTitle from './FeedTitle/FeedTitle'
import TaskList from './FeedList/TaskList'
import './Feeds.scss';

function TasksFeed({count, expired, title, users }) {
    console.log(users)
    return (
        <div className="tasks-feed">
            <FeedTitle count={count} title={title} expired={expired} />
            <TaskList users={users} /> 
        </div>
    )
}

export default TasksFeed
