
import React, { Component } from 'react';

import './RegisterForm.css';

import registerPic from './images/register.jpg';
// import RenderMap from './googleMap.js';
import googleData from './googleMap.js';
import GoogleMapLoader from "react-google-maps-loader";
import Navbarr from './navbar.js';



import axios from 'axios';
var errs = '';


class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.checkAge = this.checkAge.bind(this);

        this.submitForm = this.submitForm.bind(this);
        this.confirmEmail = this.confirmEmail.bind(this);
        this.state = {
            err: ''
        }
        // this.checkAge = this.checkAge.bind(this);
    }
    // check for age limit 
    checkAge() {
        let messageField = document.getElementById('alertAge');

        let messageWeightField = document.getElementById('alertWeight');
        let inputAgeField = document.getElementById('donor-age').value;
        let inputWeightField = document.getElementById('donor-weight').value;
        if (inputAgeField < 16 || inputAgeField > 60) {
            messageField.textContent = "your age is not eligible for Blood Donation";
            messageField.style.color = 'red';
            messageField.style.fontSize = "17px";
            messageField.style.fontWeight = "bold"
            let btns = document.getElementById('btn1');
            btns.disabled = true;


        } else {
            messageField.textContent = "";

            let btnCheck = document.getElementById('btn1');
            btnCheck.disabled = false;

        }
        // Check for weight
        if (inputWeightField < 50) {
            messageWeightField.textContent = "your Weight is not enough for Blood Donation";
            messageWeightField.style.color = 'red';
            messageWeightField.style.fontSize = "15px";
            messageWeightField.style.fontWeight = "bold";
            let btns = document.getElementById('btn1');
            btns.disabled = true;

        } else {
            messageWeightField.textContent = "";
            let btns = document.getElementById('btn1');
            btns.disabled = false;
        }
    }
    // Check for Email 


    confirmEmail() {
        let inputEmailField = document.getElementById('donor-email').value;
        let emailrecord = {
            inputEmailField
        }
        axios.post('/user/checkEmail', emailrecord)
            .then(function (response) {

                if (response.data === "email is already in use") {
                    errs = response.data;
                    let btns = document.getElementById('btn1');
                    btns.disabled = true;
                } else {
                    let btns = document.getElementById('btn1');
                    btns.disabled = false;
                }
                let emailCheck = document.getElementById("checkEmail");
                emailCheck.innerHTML = response.data;
                // emailCheck.style.fontSize = "30px";
                emailCheck.style.fontWeight = "bold";
                emailCheck.style.textAlign = "center"
                // emailCheck.style.backgroundColor = "Pink"


            }).catch(function (err) {
                console.log(err);
            })
    }






    // yesnoCheck() {
    //     if (document.getElementById('yesCheck').checked) {
    //         document.getElementById('ifYes').style.visibility = 'visible';
    //     }
    //     else document.getElementById('ifYes').style.visibility = 'hidden';


    // }
    //data send by axios API to dataBase


    // let inputAgeField = document.getElementById('donor-age').value;

    // if(inputAgeField<16 || inputAgeField > 60 ){
    //     debugger;
    //     let alertMessage = document.getElementById("messageWeightField");
    //     debugger;
    //     alertMessage.innerHTML = "your age is not eligible for Blood Donation";



    submitForm(e) {
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

            axios.post('/user/registerForm', record)
                .then((response) => {
                    debugger;
                    // console.log(response.data);

                    //   alert("you have sucessfully registered ");
                    if (response) {
                        let success = document.getElementById("success");
                        success.innerHTML = " You have successFully Registerd! ";
                        success.style.fontSize = "30px";
                        success.style.fontWeight = "bold";
                        success.style.textAlign = "center"
                        success.style.backgroundColor = "Pink"
                        setTimeout( () => {

                            this.props.history.push('/loginform');


                        }, 3000);
                    }
                    // this.props.history.push('/bloodtips');




                }).catch(function (err) {
                    console.log(err);
                })

        }
    }





    render() {
        const isvalid = this.state.err;

        return (

            <div >
                <Navbarr />
                    <div className = "registerBody">yes this his focus</div>
                <div className="container-fluid registerBodystyle">

                    <div className="row">
                        <div className="col-lg-4 col-md-5 col-sm-12 ">
                            <img src={registerPic} alt="registerPic" />
                        </div>
                        {/* <div className="col-lg-1 col-md-3 col-sm-12">

                        </div> */}

                        <div className="col-lg-6 col-md-7 col-sm-12 formRegister">



                            <form onSubmit={this.submitForm} method="POST">
                            <div className = "container-fluid">
                                <div className="formHeading ">

                                    <h3>Register As A DONOR</h3>


                                </div>
                                <div id="alertMessage" className="text-danger  "></div>
                                <div id="alertWeightMes" className="text-danger  "></div>

                                <div className="row rowStyle">
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputName" className="labelValues">Name:</label>
                                        <input id="donor-name" type="text" name="donorName" defaultValue="iffi" className="form-control inputStyle inputName" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputAge" className="labelValues">Age:</label>
                                        <input id="donor-age" type="number" onBlur={this.checkAge} name="donorAge" defaultValue="55" className="form-control inputStyle" placeholder="Age must be between 16 to 60" required />
                                        <span className="text-danger font-weight-bold"><small id="alertAge"></small></span>
                                    </div>
                                </div>
                                <div className="row rowStyle">
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputWeight" className="labelValues">Weight:</label>
                                        <input id="donor-weight" onBlur={this.checkAge} type="number" name="donorWeight" defaultValue="56" className="form-control inputStyle" placeholder="Weight must be above 50" required />
                                        <div id="alertWeight"></div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="bloodOption" className="labelValues">BloodGroup:</label>
                                        <select className="form-control inputStyle parsley-validated" defaultValue="A+" id=" donorBlood" name="DonorBlood" required>
                                            <option value="">-- Select Blood Group --</option>
                                            <option value="a-positive">A+</option>
                                            <option value="a-negative">A-</option>
                                          
                                            



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
                                        <input id="donor-email" type="email" name="donorEmail" onBlur={(e) => this.confirmEmail()} defaultValue="iffi@gmail.com" className="form-control inputStyle" placeholder="Your Email" required />
                                        <span id="checkEmail" className="text-danger font-weight-bold"></span>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputPassword" className="labelValues">Password:</label>
                                        <input id="donor-password" type="password" name="donorPassword" defaultValue="34567" className="form-control inputStyle" placeholder="must be between 4 to 8 char" required minLength="4" maxLength="8" />
                                    </div>

                                </div>
                                <div className="row rowStyle">
                                    <div className="col-lg-12 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputLast" className="labelValues">Mobile NO:</label>
                                        <input id="donor-phoneNumber" type="tel" name="donorMobile" defaultValue="03006650128" className="form-control inputStyle" required maxLength="11" />
                                    </div>

                                </div>
                                {/* <div className="row rowStyle">
                                    <div className="col-lg-12">
                                        <label htmlFor="radio" className="labelValues">Did you ever donate first ?</label><br /><br />
                                        <div className="col-md-4">

                                            <input id="yesCheck" type="radio" name="gender" className="form-radio " value="male" onClick={this.yesnoCheck} /> Yes
                            </div>
                                        <div className="col-md-4">
                                            <input type="radio" name="gender" className="form-radio" value="female" onClick={this.yesnoCheck} /> No
                                  </div>


                                    </div>
                                </div> */}
                                {/* <div id="ifYes" style={{ visibility: "hidden" }} >
                                    <div className="row rowStyle" >
                                        <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                            <label htmlFor="inputLast" className="labelValues">Last Blood date:</label>
                                            <input id="donor-last" type="date" name="donorLast" className=" inputStyle"  />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                            <label htmlFor="inputNew" className="labelValues">Today Date:</label>
                                            <input id="donor-New" type="date" name="donorNew" className=" inputStyle"  />
                                        </div>
                                    </div>
                                </div> */}

                                <hr className="rowStyle"></hr>
                                <div className="location ">
                                    <h3 className="rowStyle" > Location Details </h3>
                                </div><br />
                                <div className="row rowStyle">
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputGoogleArea" className="labelValues">Area:</label>
                                        <input id="searchTextField1" type="text" name="donorArea" className="form-control inputStyle" placeholder="Your Local Area" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputPassword" className="labelValues">City:</label>
                                        <input id="donor-city" type="text" name="donorCity" className="form-control inputStyle" placeholder="Your city" required />
                                    </div>
                                </div>
                                <div className="row rowStyle">
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputGoogleProvince" className="labelValues">Province:</label>
                                        <input id="donor-Province" type="text" name="donorProvince" className="form-control inputStyle" placeholder="Your Province" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 formBody">
                                        <label htmlFor="inputcountry" className="labelValues">Country:</label>
                                        <input id="donor-country" type="text" name="donorCountry" className="form-control inputStyle" placeholder="Your Country" required />
                                    </div>
                                </div>
                                <div >
                                    <input type="hidden" id="longi1" name="longi" />
                                    <input type="hidden" id="lati1" name="lati" />

                                </div>

                                <div className="row rowStyle">

                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div id="map_canvas" className="googleMap">

                                            <GoogleMapLoader params={googleData.credentials} render={(googleMaps) => {
                                                return googleData.renderMap(googleMaps)
                                            }} />
                                        </div>


                                    </div>
                                </div>
                                <button id="btn1" type="submit" className="btn btn-danger submit"><i className="fa fa-paper-plane" aria-hidden="true"></i>Submit Form</button>
                                {/* <button className = 'btn-danger' type="submit">Submit</button> */}
                             </div>
                            </form>
                            <div id="success" className="text-success"></div>
                        </div>
                    </div>

                </div><br />
            </div>
            // </div>


        )
    }
}
export default RegisterForm;