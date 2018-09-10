import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Formcounter } from 'react-bootstrap';
import './AdminLogin.css';
import axios from 'axios';
import Navbarr from './navbar.js';
import { withRouter } from 'react-router';
import './logIn.css';
import { Switch, BrowserRouter as Router, Link, Route } from 'react-router-dom';

class AdminLoginForm extends Component {

    constructor(props){
        super(props);
        this.submitAdmin = this.submitAdmin.bind(this);
    }
    submitAdmin =(e)=> {

        e.preventDefault();
        
    
        let email = e.target.elements.email.value.trim();
        let password = e.target.elements.password.value.trim();

        if (!email|| !password) {
            alert(" Please Enter Data Correctly");
          } else {
              let loginRecord = {
                email,
                password
              }
            axios.post('/user/loginform',loginRecord).then((response)=>{
            
                console.log(response.data);
                if(response.data.role = "Admin"){
                
                    // localStorage.setItem("appData",   JSON.stringify({user:response.data}));
                    // JSON.stringify({user:response});
                this.props.history.push('/adminPanel');

                } 
               
            }).catch((err)=>{
                console.log(err);
                let message = document.getElementById("adminMess");
                message.innerHTML = "your email or password is wrong";
                message.style.backgroundColor = "red";
                message.style.textAlign = "center";
                // alert("err");
                
            })
              
          }

    }

    render() {
        return (
            <div>
            <Navbarr />
            
            <div className = "loginForm">
           <div className="container-fluid loginform-container">
        <div className="card2 card-container2">
        
           {/* <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" />  */} 
             
            <p id="profile-name" className="profile-name-card">Admin Login</p>
            <div id = "adminMess" ></div>

            <form className="form-signin" onSubmit = {(e)=>this.submitAdmin(e)} method="POST">
                <span id="reauth-email" className="reauth-email"></span>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name = "email"required autoFocus/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" name = "password" required/>
                {/* <div id="remember" className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div> */}
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
            </form>
            <Link to = "/adminForgot" className="forgot-password">
                Forgot the password?
            </Link>
           
        </div>
    </div>
             


                
            </div>
            </div>


        );
    }
}
export default withRouter(AdminLoginForm);