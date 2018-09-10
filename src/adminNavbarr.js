
import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import { Button, FormGroup, Navbar,  NavbarHeader, FormControl, Formcounter } from 'react-bootstrap';
import './Navbarlogin.css';
import axios from 'axios';

import logo from './images/logo.png';



class AdminNavbar extends Component {

constructor(props){
  super(props);
  this.signOutAdmin = this.signOutAdmin.bind(this);

}
signOutAdmin =(e)=> {

  e.preventDefault();
  

 

 
      axios.post('/user/logout',"logOut").then((response)=>{
          
          // console.log(response);
          // console.log(this.props);
          
          this.props.history.push('/admin123');
          
          
      }).catch((err)=>{
          console.log(err);
          
          alert("err");
          
      })
        
    

}



  
    render() {
        return (
            <div className ="">
<nav className="navbar navbar-default navbar-fixed-top navbarProfile ">
<div className = "">
      <div className="container">
        
        <div className="navbar-header">
         
          <img src={logo} alt="logo" className="LogoImage" />
        </div>
    
        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div className="collapse navbar-collapse" >
          <ul className="nav navbar-nav navbar-right">
          
                                        {/* <li> <Link to='/bloodtips' onClick = {(e)=>this.submitLogin(e)}><span className="signout"><b>SIGN OUT</b></span> </Link></li> */}

                <form onSubmit = {(e)=>this.signOutAdmin(e)}>
                <label htmlFor = "signout"/> 
                <button id="btn1" type="submit"  className="btn btn-danger signout">SIGN OUT</button>
                  
                  </form>                         

            
          </ul>
          
        </div>            
      </div>
      </div>
    </nav>
    </div>




            

        );
    }
}
export default AdminNavbar;