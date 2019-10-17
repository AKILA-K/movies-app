import React, { Component } from 'react';
import './Home.css';
import Header from "../../common/header/Header";
import {withStyles} from '@material-ui/core/styles';
import movieData from '../../common/movieData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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
    width : '100%',
  }

});


 class Home extends Component {
  render() {
    const {classes} = this.props;
    return (
        <div>
            <Header />
            <div className={classes.upcomingMoviesHeading} >
              <span>Upcoming Movies</span>
              </div>
              <GridList cols={5} className={classes.gridListUpcomingMovies}>
                {movieData.map(movie=>(
                  <GridListTile key={movie.id}>
                    <img src={movie.poster_url} alt={movie.title} />
                    <GridListTileBar title={movie.title} />
                    </GridListTile>
                ))}
                </GridList>
        </div>
        )
    
  }
}

export default withStyles (styles)(Home);