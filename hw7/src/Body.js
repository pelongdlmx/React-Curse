import React, { Component } from 'react';
import './App.css';
import Clock from 'react-live-clock';
import NewYorkTimes from './Newyorktimes';
import ABCNews from './Abcnews';
import LastWeek from './Lastweek';
import LastMonth from './Lastmonth';


class Body extends Component {
  render() {
    return (
      <div className="container-fluid">        
        <div className="body-content">
            <Clock  format={'MMMM Do YYYY'} ticking={true} timezone={'US/Mountain'} />
        </div>
        <div className="row pb">
            <NewYorkTimes/>
            <ABCNews/>
            <LastWeek/>
            <LastMonth/>
        </div>
      </div>
    );
  }
}

export default Body;