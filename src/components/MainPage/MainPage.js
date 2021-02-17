import React, {useState, useEffect, useContext } from 'react';
import Charts from './Charts/Charts';
import TasksFeed from './Feeds/TasksFeed';
import MessagesFeed from './Feeds/MessagesFeed';
import ActivitiesFeed from './Feeds/ActivitiesFeed';
import { Link } from "react-router-dom";
import './MainPage.scss';
import pieChart from '../../assets/pie-chart.png';
import lineChart from '../../assets/LineChart.png';
import {UsersContext} from '../../context/UserContext';
import moment from 'moment';
import more from "../../assets/more-24px.svg";
import image1 from "../../assets/face2.jpg";
import image2 from "../../assets/image1.jpg";
import image3 from "../../assets/image2.jpg";

function MainPage() {

    const [users, setUsers] = useContext(UsersContext)
    const [counter, setCounter] = useState(0);
    const [expired, setExpired] = useState(0);
    
    useEffect(()=> {
        const count = users.filter(user => user.isClicked === true)
            setCounter(count.length)
            document.querySelector('.users').style.background = "#f7f9fa"
    },[])
    
    useEffect(() => {
        const today = moment(new Date());
        users.map(user =>  {
            if(moment(user.date).diff(today, 'days') < 0) {
                const delaySum = (Date.parse(today) - Date.parse(user.date)) / (1000 * 60 * 60 * 24)
                user.taskDate = `${delaySum.toFixed()} days delay`
                const bg = document.querySelector('.date')
                bg.style.color = "#f83c7b"
            } else if(moment(user.date).diff(today, 'days') > 0) {
                const daysLeft = (Date.parse(user.date) - Date.parse(today)) / (1000 * 60 * 60 * 24)
                user.taskDate = `${daysLeft.toFixed()} days left`
            }      
        })
        const exp = users.filter(user => moment(user.date).diff(today, 'days') < 0)
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
                <div className="list tasks">
                    <TasksFeed count={users.length} expired={expired} title="Tasks" users={users} />
                </div>
                <div className="list messages">
                    <MessagesFeed count={counter} title="Messages" users={users} />
                </div>
                <div className="list activities">
                    <ActivitiesFeed count={users.length} title="Activities" users={users} />
                </div>  
            </div> 
        </div>
    )
}

export default MainPage