import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import * as ReactBootStrap from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './myStyle.css'
import DisplayImages from './DisplayImages'

export class StyleNavigationMenu extends Component{

    render(){
        return(
        <div>
         <Navbar bg="dark" variant="dark">
           <Navbar.Brand href="#home"></Navbar.Brand>
           <h1 className = 'centerLogo'>Explore Nature</h1>
             <Nav className="mr-auto">
                <Nav.Link className = 'positionLinks' href="#home">Home</Nav.Link>
                <Nav.Link className = 'positionLinks' href="#features">Upload</Nav.Link>
                <Nav.Link className = 'positionLinks' href="#pricing">Travel</Nav.Link>
                <Link className = 'buttonRegister' to="/register">Register your account</Link>
         
            </Nav>  
            </Navbar>
           <div className='list'>
          
            <h1>Discover best mesmerizing sceneries of Nature!</h1> 
             <Link className="LinkStyle" to="/">Share your Best Clicks with Others</Link>
             <DisplayImages/>
           </div>    
           
       </div>
        );
    }
}
