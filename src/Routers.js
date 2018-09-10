import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button, Jumbotron, FormGroup, Navbar, NavbarCollapse, NavbarHeader, FormControl, ControlLabel, Formcounter } from 'react-bootstrap';
import './Router.css';
import Slider from './Slider';
import RegisterForm from './RegisterForm';
import Home from './Home.js';
import BloodTips from './bloodTips.js';
import LoginForm from './logIn.js'
import ContactUsForm from './contactUs.js'
import DonorProfile from './profile.js';
import DonorInformations from './donorInformation.js';
import Navbarr from './navbar.js';
import AdminLoginForm from './AdminLogin.js';
import Trigger from './forgotpopup.js';
import AdminPanle from './AdminProfile';
import AdminTrigger from './AdminForgotpopUp.js'
class Routerrs extends Component {
    render() {
        return (
            
            <div>



                <Switch>
                    

                    <Route exact path='/' component={Home} />

                    <Route  path='/registerform' component={RegisterForm} />
                    <Route  path='/bloodtips' component={BloodTips} />
                    <Route  path='/loginform' component={LoginForm} />
                    <Route  path='/contactUs' component={ContactUsForm} />
                    <Route  path='/profile' component={DonorProfile} />
                    <Route  path='/navbar' component={Navbarr} />
                    <Route  path='/donorInformation' component={DonorInformations} />
                    <Route  path='/admin123' component={AdminLoginForm} />
                    <Route  path='/popup' component={Trigger} />
                    <Route path = '/adminForgot' component = {AdminTrigger}/>
                    <Route path = '/adminPanel' component={AdminPanle}/>
                
                </Switch>
            </div>
            


        );
    }
}
export default Routerrs;