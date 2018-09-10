import React, { Component } from 'react';
import Navbarr from './navbar.js';
import Slider from './Slider.js';
import DonationProcess from './DonationProcess.js';

import Footer from './Footer.js';
class Home extends Component {
    render(){
        return(
            <div>
                
                <Navbarr />
            <Slider/>
            <DonationProcess/>
              
            </div>
        )
    }
}
export default Home;