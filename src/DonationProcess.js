import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button, Jumbotron, FormGroup, Navbar, NavbarCollapse, NavbarHeader, FormControl, ControlLabel, Formcounter } from 'react-bootstrap';
import './DonationProcess.css'
import seprator from './images/separator.png'
import process_1 from './images/process_1.jpg'
import process_2 from './images/screening.PNG'
import process_3 from './images/process_3.jpg'
import process_4 from './images/process_4.jpg'

import Aim from './Aim.js';
class DonationProcess extends Component {
  render() {
    return (
      <div><br /><br />
        <div className="container-fluid">
          <div className="row">
            <div className=" col-lg-4 col-md-6"></div>
            <div className=" col-lg-4 col-md6 section">
              <h2 ><span className="section">Donation Process</span> </h2>

            </div>
          </div>
          <div className="row">
            <div className=" col-md-5 col-sm-6"></div>
            <div className=" col-md-5 col-sm-6">
              <img src={seprator} alt="sperator" /><br />
              
            </div>
          </div>
          <div className="row">
            <div className=" col-md-3 col-sm-6"></div>
            <div className=" col-md-7 col-sm-6">
              
              <p className="section-subheading ">The donation process from the time you arrive center until the time you leave</p>
            </div>
          </div><br />
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xm-12">
              <div className="process-layout">
                <figure className="process-img">
                  <img src={process_1} alt="process_1" />
                  <div className="step">
                    <h3>1</h3>

                  </div>
                </figure>
                {/* end process image */}
                <article className="process-info">
                  <h2>Registration</h2>
                  <p>You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.</p>
                </article>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xm-12">
              <div className="process-layout">
                <figure className="process-img">
                  <img  className= "process2"src={process_2} alt="process_2" />
                  <div className="step">
                    <h3>2</h3>

                  </div>
                </figure>
                {/* end process image */}
                <article className="process-info">
                  <h2>screening</h2>
                  <p>A drop of blood from your finger will take for simple test to ensure that your blood iron levels are proper enough for donation process.</p>
                </article>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xm-12">
              <div className="process-layout">
                <figure className="process-img">
                  <img src={process_3} alt="process_3" />
                  <div className="step">
                    <h3>3</h3>

                  </div>
                </figure>
                {/* end process image */}
                <article className="process-info">
                  <h2>Donation</h2>
                  <p>After ensuring and passed screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes.</p>
                </article>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xm-12">
              <div className="process-layout">
                <figure className="process-img">
                  <img src={process_4} alt="process_4" />
                  <div className="step">
                    <h3>4</h3>

                  </div>
                </figure>
                {/* end process image */}
                <article className="process-info">
                  <h2>RefreshMent</h2>
                  <p>You can also stay in sitting room until you feel strong enough to leave place. You should drink awesome drink  in donation zone. </p>
                </article>
              </div>
            </div>
          </div>
        </div><br/>
         <Aim/>
              <br/>
      </div>
    );
  }
}
export default DonationProcess;