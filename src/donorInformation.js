import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button, Jumbotron, FormGroup, Navbar, NavbarCollapse, NavbarHeader, FormControl, ControlLabel, Formcounter } from 'react-bootstrap';
import './donorInformation.css';
import Navbarr from './navbar.js';



class DonorInformations extends Component {
  constructor(props) {
    super(props);

    var donorData = JSON.parse(localStorage.getItem('donorInfo') || '{}');
    console.log(donorData);
    donorData.user && (this.setState(donorData.user));

    this.state = donorData.user;

  }


  render() {
    return (



      <div>

        <Navbarr />
        <div className="container-fluid uperbody">
          <div className="container lowerbody"></div>
          <div className="row">

            <div className="col-lg-2 col-md-4 col-sm-6 col-xm-12 "> </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xm-12 headers ">
              <div className="">
                <strong><h1 className="textstyle"> Refine Search</h1></strong>
                <div className="col-lg-2 col-md-2 col-sm-12 col-xm-12 "></div>
                <form className="formList">
                  <div className="col-lg-2 col-md-2 col-sm-12 col-xm-12 ">
                    <label htmlFor="inputCity">City:</label>
                    <input type="text" readOnly defaultValue={this.state.length > 0 ? this.state[0].address.city : ""} />
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-12 col-xm-12 "></div>
                  <div className="col-lg-2 col-md-2 col-sm-12 col-xm-12 ">
                    <label htmlFor="inputBlood">Blood:</label>
                    <input type="text" readOnly defaultValue={this.state.length > 0 ? this.state[0].bloodGroup : ""} />
                  </div>

                </form>


              </div>
            </div>

          </div>

          <div className="container ">

            <div className="row secondContainer">
              <h1 className="textstyle more"> Search For Your Required Blood</h1>
              {/* loop */}


              <div className="col-lg--12 col-md-12 col-sm-12 ">
              
                {this.state.length > 0 ? this.state.map((donor, i) => {
                {console.log(this.state.length)}
                  return (
                    <div key={i} className="Donor">
                      <div className="row">
                      
                        <div className="row">
                          <div className="col-md-5">
                            &nbsp;&nbsp;
              &nbsp;   <label>Donor Name:&nbsp;&nbsp; &nbsp;<span className="danamic">{donor.name}</span></label>

                          </div>
                          <div className="col-md-4">
                            <label>Donor Age:&nbsp;&nbsp; &nbsp;<span className="danamic">{donor.age}</span></label>
                          </div>


                        </div><br /><br />

                        <div className="row">
                          <div className="col-md-5">
                            &nbsp;&nbsp;
              &nbsp;   <label>Phone Number:&nbsp;&nbsp; &nbsp;<span className="danamic">{donor.mobNO}</span></label>
                          </div>
                          <div className="col-md-4">
                            <label>Email:&nbsp;&nbsp; &nbsp;<span className="danamic">{donor.email}</span></label>

                          </div>

                        </div><br /><br />


                        <div className="row">
                          <div className="col-md-5">
                            &nbsp;&nbsp;
              &nbsp;   <label>Area:&nbsp;&nbsp; &nbsp;<span className="danamic">{donor.address.area}</span></label>
                          </div>
                          <div className="col-md-4">
                            <label>Province:&nbsp;&nbsp; &nbsp;<span className="danamic">{donor.address.province}</span></label>

                          </div>

                        </div>






                      </div>

                      {/* Area Detail */}



                    </div>);

                })

                  :

                  <div className="noDonor ">There is no Donor available yet Against your Search!</div>}



              </div>
            </div>

          </div>


        </div>














      </div>
    );
  }
}
export default DonorInformations;