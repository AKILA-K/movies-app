import React, { Component } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import logo from "../../assets/logo.svg";
import Modal from "react-modal";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const TabContainer = function(props){
    return(
        <Typography component="div" style={{padding : 0 , textAlign : "center"}}>
        {props.children}
        </Typography>
    );
}

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
        <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.closeModalHandler} style={customStyles}>
        <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
            <Tab label="LOGIN"></Tab>
            <Tab label="REGISTER"></Tab>
        </Tabs>
        <TabContainer>
            <FormControl required>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input id="username" type="text"></Input>
                </FormControl><br/>
                <FormControl required>  
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" type="password"></Input>
            </FormControl><br />
            <Button variant="contained" color="primary">LOGIN</Button>
            {/* <Button className="button" variant="contained" color="primary">LOGIN</Button> */}
        </TabContainer>
        </Modal>
        </div>
        )
    
  }
}
