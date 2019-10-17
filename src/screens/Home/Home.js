import React, { Component } from 'react';
import './Home.css';
import Header from "../../commons/header/Header";

const styles = theme => ({
  root : {
    flexgrow : 1,
    backgroundColor : theme.palette.background.paper
  },
  upcomingMoviesHeading: {
    textAlign : 'center',
    background: '#ff9999',
    padding :'8px',
    fontSize : '1 rem' 
  },
  gridListUpcomingMovies : {
    flexWrap : 'nowrap',
    transform : 'translateZ(0)',
    width : '100%'
  }

});


export default class Home extends Component {
  render() {
    return (
        <div>
            <Header />
            <div>
              <span>Upcoming Movies</span>
              </div>
        </div>
        )
    
  }
}
