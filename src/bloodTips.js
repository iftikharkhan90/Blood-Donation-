
import React, { Component } from 'react';

import { Button, FormGroup, Navbar, NavbarCollapse, NavbarHeader, FormControl, ControlLabel, Formcounter } from 'react-bootstrap';
import './bloodTips.css';
import Navbarr from './navbar.js';

class BloodTips extends Component {
    render() {
        
        return (
            <div>
            <Navbarr />
            <div className="container-fluid fullBody">
            <div className ="row">
            <div className = " col-lg-3 col-md-1 "></div>
            <div className = "col-lg-6 col-md-8 tipsBody">
                <div className="well-sm ">
                    <h1>Blood Tips</h1>
                    <ul className="blood-list">
                        <li>Drink plenty of water the night and morning before you donate.</li>
                        <li>Eat breakfast to help keep your blood sugar up.</li>
                        <li>Eat iron rich foods for 2 weeks before your appointment; for example, spinach, whole grains, eggs, and
                          beef.
        </li>
                        <li>Avoid fatty foods for twenty-four hours before you donate</li>
                        <li>Avoid smoking on the day before donating. You can smoke 3 hours after donation.</li>
                        <li>Ask for a blanket if your hands or feet start to feel cold.</li>
                        <li>Have a snack after the donation.Rest for a few minutes enjoying your snack before leaving the donation
                          site.
        </li>
                        <li>Eat a meal high in protein after your donation: beef, chicken or legumes are excellent choices.</li>
                        <li>You will not be eligible to donate blood if you have consumed alcohol 48 hours before donation.</li>
                        <li>Avoid heavy lifting and strenuous exercise for the rest of the day.</li>


                        <li><strong className="strongHeading">Nervous ? Read this :</strong></li>
                        <ul className="blood-list">
                            <li><strong  className="strongHeading">Will I feel tired ?</strong>
                                <br /><br />
                                You will not feel drained or tired if you continue to drink fluids and have a good meal.
          </li>
                            <li><strong  className="strongHeading">Will I be bedridden for the rest of the day ?</strong>
                                <br /><br />
                                You can resume all your normal activities, though you're asked to refrain.
          </li>
                            <li><strong  className="strongHeading">Will I be in danger of having low blood ?</strong>
                                <br /><br />
                                If you are verified to donate by the doctor you will still have surplus blood after the donation.
          </li>
                            <li><strong  className="strongHeading">Ahh - Syringes ! How much will it hurt ?</strong>
                                <br /><br />
                                No, you will not feel any pain.
          </li>
                            <li><strong  className="strongHeading">Does one feel dizzy after this ?</strong>
                                <br /><br />
                                You will not faint or feel uncomfortable after donating blood.
          </li>
                            <li><strong  className="strongHeading">Oh My God ! I'll get AIDS !</strong>
                                <br /><br />
                                No! Make sure disposable syringes are used and all measures are taken to keep you germ free.
          </li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className = "  col-lg-1 col-sm-6 col-md-3 extraDiv"></div>
            </div>
            </div>
            </div>
        )
    }

}
export default BloodTips;