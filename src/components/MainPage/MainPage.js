import React, {useState, useEffect, useContext } from 'react';
import Charts from './Charts/Charts';
import TasksFeed from './Feeds/TasksFeed';
import MessagesFeed from './Feeds/MessagesFeed';
import ActivitiesFeed from './Feeds/ActivitiesFeed';
import './MainPage.scss';
import pieChart from '../../assets/your-sales_graph.png';
import lineChart from '../../assets/report_graph.png';
import {UsersContext} from '../../context/UserContext';
import {isDelayed} from '../../helpers/utils';
import {delaySum} from '../../helpers/utils';

import moment from 'moment';

function MainPage() {

    const {users, setUsers} = useContext(UsersContext)
    const [counter, setCounter] = useState(0);
    const [expired, setExpired] = useState(0);

    useEffect(() => {
        const count = users.filter(user => user.isClicked === true)
        const newUsers = users.map(user => ({
            ...user,
            taskDate: `${delaySum(user.date).toFixed()} days ${isDelayed(user.date) ? 'delay' : 'left'}`
        }));

        setCounter(count.length);
        setUsers(newUsers);
    }, []);


    useEffect(() => {
        const today = moment(new Date());
        const exp = users.filter(user => moment(user.date).diff(today, 'days') < 0);
        
        setExpired(exp.length)
      }, [expired])    

    return (
        <div className="main">
            <div className="content-title">
                <h2>Hello John</h2>
            </div>
            <div className='charts row'>
                <div className="box chart-a">
                    <Charts title='Your Sales' image={pieChart} />
                </div>
                <div className="box chart-b">
                    <Charts title='Reports' image={lineChart} /> 
                </div>
                
            </div>  
            <div class="row">
                <div className="feed tasks">
                    <TasksFeed count={users.length} expired={expired} title="Tasks" users={users} />
                </div>
                <div className="feed messages">
                    <MessagesFeed count={counter} title="Messages" users={users} />
                </div>
                <div className="feed activities">
                    <ActivitiesFeed count={users.length} title="Activities" users={users} />
                </div>  
            </div> 
        </div>
    )
}

export default MainPage