import React, { Component } from 'react';
import NavbarrLogin from './NavbarLogin.js';

import './profile.css';
import axios from 'axios';
import googleData from './updategoogleMap.js';
import GoogleMapLoader from "react-google-maps-loader";


class DonorProfile extends Component {
    constructor(props) {
        super(props);

        var appData = JSON.parse(localStorage.getItem('appData') || '{}');
        appData.user && (this.setState(appData.user));

        this.state = appData.user;


        this.UpdateDonorProfile = this.UpdateDonorProfile.bind(this);
        this.editValue = this.editValue.bind(this);

    }
    //  
    editValue(e) {

        var obj = {};
        obj[e.target.getAttribute('name')] = e.target.value;
        //  edit:{
        //  this.state.name = e.target.value

        //  }
        this.setState(obj);

    }






    // {
    //     user:user
    // }
    // axios.post('/user/getUserData',"yes").then((response)=>{
    //     console.log(response);
    //     console.log(response.data.name);
    //   this.setState({Name:response.data.name, 
    //     Age:response.data.age,
    //     Weight:response.data.weight,
    //     BloodGroup:response.data.bloodGroup,
    //     Email:response.data.email,
    //     Password:response.data.password,
    //     MobNumber:response.data.mobNo,
    //     Area:response.data.address.area,
    //     City:response.data.address.city,
    //     Country:response.data.address.country,
    //     Province:response.data.address.province,
    //     // Age:response.data.name,

    // });

    // }).catch((err)=>{
    //     console.log(err);

    //     alert("err");

    // })




    UpdateDonorProfile(e) {
        e.preventDefault();


        let donorName = e.target.elements.donorName.value.trim();
        let donorAge = e.target.elements.donorAge.value.trim();
        let donorWeight = e.target.elements.donorWeight.value.trim();
        let DonorBlood = e.target.elements.DonorBlood.value.trim();
        let donorEmail = e.target.elements.donorEmail.value.trim();
        let donorPassword = e.target.elements.donorPassword.value.trim();
        let donorMobile = e.target.elements.donorMobile.value.trim();
        let donorArea = e.target.elements.donorArea.value.trim();
        let donorCity = e.target.elements.donorCity.value.trim();
        let donorProvince = e.target.elements.donorProvince.value.trim();
        let donorCountry = e.target.elements.donorCountry.value.trim();
        let longi = e.target.elements.longi.value.trim();
        let lati = e.target.elements.lati.value.trim();

        // let alertMessage = document.getElementById("messageWeightField").value;
        let inputAgeField = document.getElementById('donor-age').value;

        e.target.reset();
        // validation
        // if(inputAgeField<16  ){

        //     let alertMessage = document.getElementById("alertMessage");
        //     alertMessage.innerHTML = "Soory! you are Under Age";
        //     alertMessage.style.fontSize = "30px";
        //     alertMessage.style.fontWeight = "bold";
        //     alertMessage.style.textAlign = "center"
        //     alertMessage.style.backgroundColor = "Black"


        //     return false;
        // }
        // if( inputAgeField > 60){
        //     let alertMessage = document.getElementById("alertMessage");
        //     alertMessage.innerHTML = "Soory! you are Over age";
        //     alertMessage.style.fontSize = "30px";
        //     alertMessage.style.fontWeight = "bold";
        //     alertMessage.style.textAlign = "center"
        //     alertMessage.style.backgroundColor = "Black"

        //     return false;

        // }
        // if(donorWeight<50  ){
        //     let alertMessage = document.getElementById("alertWeightMes");
        //     alertMessage.innerHTML = " OOPS! You are Under Weight";
        //     alertMessage.style.fontSize = "30px";
        //     alertMessage.style.fontWeight = "bold";
        //     alertMessage.style.textAlign = "center"
        //     alertMessage.style.backgroundColor = "Black"
        //     return false;
        // }
        debugger;
        if (!donorName || !donorAge || !donorWeight || !DonorBlood || !donorEmail || !donorPassword || !donorMobile || !donorArea || !donorCity || !longi || !lati || !donorProvince || !donorCountry) {
            alert(" Please Enter Data Correctly");
        } else {
            let record = {
                donorName,
                donorAge,
                donorWeight,
                DonorBlood,
                donorEmail,
                donorPassword,
                donorMobile, donorArea,
                donorCountry,
                donorProvince,
                donorCity,
                longi,
                lati
            }
            console.log(record);

            axios.post('/DonorProfile/setNewUserData', record)
                .then((response) => {
                    // console.log(response.data);

                    //   alert("you have sucessfully registered ");
                    if (response) {
                        let success = document.getElementById("success");
                        success.innerHTML = " Data Has Been Updated ";
                        success.style.fontSize = "30px";
                        success.style.fontWeight = "bold";
                        success.style.textAlign = "center"
                        success.style.backgroundColor = "Pink"
                        setTimeout (  () => {

                            let success = document.getElementById("success");
                        success.innerHTML = " ";


                        }, 2000);
                    }





                }).catch(function (err) {
                    console.log(err);
                })

        }
    }



















    render() {

        return (

            <div >
                <NavbarrLogin history={this.props.history} />
                <div className = "container-fluid aboveStart">
                <div className = "row"></div>
                
                 <div className = "setBackground">
                <div className="container-fluid profileBody ">

                    <div className="row">
                        <div className="col-lg-3 col-md-5 col-sm-12 ">
                            {/* <img src={registerPic} alt="registerPic" /> */}
                        </div>
                        {/* <div className="col-lg-1 col-md-3 col-sm-12">

                        </div> */}

                        <div className="col-lg-6 col-md-7 col-sm-12 formRegister">



                            <form onSubmit={this.UpdateDonorProfile} method="POST">
                                <div className="formHeading ">

                                    <h3> HI {this.state.name} Update your Profile</h3>


                                </div>
                                <div id="alertMessage" className="text-danger  "></div>
                                <div id="alertWeightMes" className="text-danger  "></div>

                                <div className="row rowStyle">
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputName" className="labelValues">Name:</label>
                                        <input id="donor-name" type="text" name="donorName" defaultValue={this.state.name} onChange={this.editValue} className="form-control inputStyle" placeholder="Your Name" required />

                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputAge" className="labelValues">Age:</label>
                                        <input id="donor-age" type="number" name="donorAge" defaultValue={this.state.age} onChange={this.editValue} className="form-control inputStyle" placeholder="Age must be between 16 to 60" required />
                                        <span id="alertAge" className="text-danger font-weight-bold"></span>
                                    </div>
                                </div>
                                <div className="row rowStyle">
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputWeight" className="labelValues">Weight:</label>
                                        <input id="donor-weight" onBlur={this.checkAge} type="number" name="donorWeight" onChange={this.editValue} defaultValue={this.state.weight} className="form-control inputStyle" placeholder="Weight must be above 50" required />
                                        <div id="alertWeight"></div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="bloodOption" className="labelValues">BloodGroup:</label>
                                        {/* <input id="blood" type="text" name="DonorBlood" className="form-control inputStyle" defaultValue={this.state.bloodGroup} onChange={this.editValue} placeholder="Blood Group" required /> */}
                                        <select className="form-control inputStyle parsley-validated" defaultValue={this.state.bloodGroup} id=" donorBlood" onChange={this.editValue} name="DonorBlood" required>
                                            <option value="">-- Select Blood Group --</option>
                                            <option value="a-positive">A+</option>
                                            <option value="a-negative">A-</option>
                                            <option value="a1">A1</option>
                                            <option value="a1-positive">A1+</option>
                                            <option value="a1-negative">A1-</option>
                                            <option value="a2-positive">A2+</option>
                                            <option value="a2-negative">A2-</option>



                                            <option value="b-positive">B+</option>
                                            <option value="b-negative">B-</option>

                                            <option value="o-positive">O+</option>
                                            <option value="o-negative">O-</option>
                                            <option value="ab-positive">AB+</option>
                                            <option value="ab-negative">AB-</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row rowStyle">
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputEmail" className="labelValues">Email:</label>
                                        <input id="donor-email" type="email" name="donorEmail" className="form-control inputStyle" defaultValue={this.state.email} onChange={this.editValue} placeholder="Your Email" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputPassword" className="labelValues">Password:</label>
                                        <input id="donor-password" type="password" name="donorPassword" defaultValue={this.state.password} onChange={this.editValue} className="form-control inputStyle" placeholder="must be between 4 to 8 char" required minLength="4" maxLength="8" />
                                    </div>

                                </div>
                                <div className="row rowStyle">
                                    <div className="col-lg-12 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputLast" className="labelValues">Mobile NO:</label>
                                        <input id="donor-phoneNumber" type="text" name="donorMobile" defaultValue={this.state.mobNO} onChange={this.editValue} className="form-control inputStyle" onChange={this.change} />
                                        {/* <input id="donor-phoneNumber" type="tel" name="donorMobile"  value = {this.state.MobileNumber} className="form-control inputStyle" required maxLength="11" /> */}
                                        {/* {console.log(this.state.MobileNumber)
                                    } */}
                                    </div>

                                </div>




                                {/* location */}

                                <div className="row rowStyle">
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputGoogleArea" className="labelValues">Area:</label>
                                        <input id="searchTextField" type="text" name="donorArea" defaultValue={this.state.address.area} onBlur={this.state.editValue} className="form-control inputStyle" placeholder="Your Local Area" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputPassword" className="labelValues">City:</label>
                                        <input id="updateDonor-city" type="text" name="donorCity" defaultValue={this.state.address.city} onBlur={this.state.editValue} className="form-control inputStyle" placeholder="Your city" required />
                                    </div>
                                </div>
                                <div className="row rowStyle">
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputGoogleProvince" className="labelValues">Province:</label>


                                        <input type="text" name="donorProvince" id="updateDonor-Province" defaultValue={this.state.address.province} onBlur={this.state.editValue} className="form-control inputStyle" placeholder="Your Province" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputcountry" className="labelValues">Country:</label>


                                        <input type="text" id="updateDonor-country" name="donorCountry" defaultValue={this.state.address.country} onBlur={this.state.editValue} className="form-control inputStyle" placeholder="Your Country" required />
                                    </div>
                                </div>
                                <div >
                                    <input type="hidden" id="longi" name="longi" />
                                    <input type="hidden" id="lati" name="lati" />

                                </div>
                                <div className="row rowStyle">

                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div id="Profile_GoogleMap" className="googleMap">

                                            <GoogleMapLoader params={googleData.credentials} render={(googleMaps) => {
                                                return googleData.renderMap(googleMaps)
                                            }} />
                                        </div>


                                    </div>
                                </div>









                                <button type="submit" className="btn btn-danger submit"><i className="fa fa-paper-plane" aria-hidden="true"></i>Update Profile</button>
                                {/* <button className = 'btn-danger' type="submit">Submit</button> */}

                            </form>
                            <div id="success" className="text-success"></div>
                        </div>
                    </div>

                </div><br />
            </div>
            </div>
            </div>

        )
    }
}
export default DonorProfile;