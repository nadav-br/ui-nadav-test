import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {UsersProvider} from './context/UserContext'
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';
import Statistics from './components/fakepages/Statistics';
import Calender from './components/fakepages/Calender';
import Workflow from './components/fakepages/Workflow';
import Settings from './components/fakepages/Settings';
import Users from './components/fakepages/Users';
import './App.scss';


function App() {
  
  return (
    <div className="app">
      <UsersProvider>
      <Router>                     
            <Header />
            <div className="main">
            <NavBar />                        
            <Switch>
              <Route path="/home" exact component={MainPage} />  
              <Route path="/Workflow" exact component={Workflow} />
              <Route path="/Statistics" exact component={Statistics} /> 
              <Route path="/Calender" exact component={Calender} />
              <Route path="/Users" exact component={Users} />       
              <Route path="/Settings" exact component={Settings} /> 
            </Switch>   
            </div>
                   
      </Router>
      </UsersProvider>
    </div>
  );
}

export default App;
