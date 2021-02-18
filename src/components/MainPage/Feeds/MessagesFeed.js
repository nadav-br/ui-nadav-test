import React from 'react';
import FeedTitle from './FeedTitle/FeedTitle';
import MessagesList from './FeedList/MessagesList';
import './Feeds.scss';

function MessagesFeed({count, title, users}) {

    return (
        <div class="box-wrapper">
            <FeedTitle count={count} title={title} />              
            <MessagesList users={users} />
        </div>
    )
}

export default MessagesFeed
