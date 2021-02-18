import React from 'react';
import FeedTitle from './FeedTitle/FeedTitle';
import ActivitiesList from './FeedList/ActivitiesList';
import './Feeds.scss';

function ActivitiesFeed({count, title, users}) {
    
    return (
        <div class="box-wrapper">
            <FeedTitle count={count} title={title} />              
            <ActivitiesList users={users} />
        </div>
    )
}

export default ActivitiesFeed
