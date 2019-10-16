import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from "../../assets/logo.svg";
import Modal from "react-modal";

export default class Header extends Component {
    constructor(){
        super();
        this.state= {
            modalIsOpen : false,
            value : 0
        };

    }

    openModalHandler = () => {
        this.setState({modalIsOpen : true})
    }

    closeModalHandler = () =>{
        this.setState({modalIsOpen : false})
    }

    tabChangeHandler = (event,value) => {
        this.setState({value})
    }
  render() {
    return (
        <div>
          {/* <Button variant="contained" color="default">LOGIN</Button> */}
          <header className="app-header">
              <img src={logo} className="app-logo" alt="logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>
                            Login
                        </Button>
                    </div>
                </header>
        <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModalHandler}>
        <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
            <Tab label="LOGIN"></Tab>
            <Tab label="REGISTER"></Tab>
        </Tabs>
        </Modal>
        </div>
        )
    
  }
}
