import React from 'react';
import FeedTitle from './FeedTitle/FeedTitle';
import List from './FeedList/List';
import './Feeds.scss';

function Feed({ count, expired, title, users, type }) {
    
    return (
        <div class="box-wrapper">
            <FeedTitle count={count} title={title} expired={expired} />
            <List users={users} type={type} /> 
        </div>
    )
}

export default Feed
