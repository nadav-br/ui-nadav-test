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
            <NavBar />
            <div className="layout">                                    
            <Header />                    
            <Switch>
              <Route path="/ui-nadav-test" exact component={MainPage} />  
              <Route path="/ui-nadav-test/Workflow" exact component={Workflow} />
              <Route path="/ui-nadav-test/Statistics" exact component={Statistics} /> 
              <Route path="/ui-nadav-test/Calender" exact component={Calender} />
              <Route path="/ui-nadav-test/Users" exact component={Users} />       
              <Route path="/ui-nadav-test/Settings" exact component={Settings} /> 
            </Switch>   
            </div>
                   
      </Router>
      </UsersProvider>
    </div>
  );
}

export default App;
