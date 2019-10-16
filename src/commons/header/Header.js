import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';

export default class Header extends Component {
  render() {
    return (
        <div>
          <Button variant="contained" color="default">LOGIN</Button>
        </div>
        )
    
  }
}
