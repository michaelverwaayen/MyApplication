import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Form, TextArea} from 'semantic-ui-react'
import{
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,

} from "@blueprintjs/core";

class App extends Component {
  render() {


    return (
      
      <div className="App">
        <div class = "topnav">
          <a class="active" href="#home">Home</a>
          <a href ="#news">News</a>
          <a href="#contact">Contact</a>
        </div>
        <div class = "sidenav" div id="mySidenav">
          <a href="javascript:void(0)" class = "closebtn"
          onclick="closeNav()">&times;</a>
          <a href = "#">Slide 1</a>
          <a href = "#">Slide 2</a>
          <a href = "#">Slide 3</a>
          <a href = "#">Slide 4</a>
        </div>
  
        
        <span onclick="openNav()">open</span>

        <header className="App-header">
        <Form className = "textBox1">
          <TextArea placeholder='type here'/>
        </Form>

        <Form className = "textBox2">
          <TextArea placeholder='type here' />
        </Form>
    
        </header>

      )

      </div>
      
      
    );
  }
}
export default App;
