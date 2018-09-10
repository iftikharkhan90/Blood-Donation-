import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Formcounter } from 'react-bootstrap';
import './contactUs.css';
import axios from 'axios';
import Navbarr from './navbar.js';

class ContactUsForm extends Component {
	constructor(props) {
        super(props);
        this.contactSubmit = this.contactSubmit.bind(this);
        
        
    }
   
    
    
     //data send by axios API to dataBase

     contactSubmit = (e) => {
        e.preventDefault();
        
    
        let contactUsName = e.target.elements.contactUsName.value.trim();
        let contactUsEmail = e.target.elements.contactUsEmail.value.trim();
        
        let contactUsdescription = e.target.elements.contactUsdescription.value.trim();
       
                e.target.reset();
        
        if (!contactUsName || !contactUsEmail  ||!contactUsdescription  ) {
          alert(" Please Enter Data Correctly");
        } else {
            let contactUsRecord = {
                contactUsName,
                contactUsEmail, 
               
                contactUsdescription, 
            }
            console.log(contactUsRecord);
            
          axios.post('/contactUs',contactUsRecord)
            .then(function (response) {
              console.log(response.data);
              
               if(response){
                
                let showMessage = document.getElementById("showMessage");
                showMessage.innerHTML = "Hi Thanks for Your FeedBackWe will response to your feedback withIn 24 Hours on your provided Email ";
                showMessage.style.fontSize = "30px";
                showMessage.style.fontWeight = "bold";
                showMessage.style.textAlign = "center";
                showMessage.style.backgroundColor = "Green";
                setTimeout( () => {
                    let showMessage = document.getElementById("showMessage");
                    showMessage.innerHTML = "";


                }, 5000);
               }
              
            }).catch(function(err){
                console.log(err);
            })
            
        }
      }







    render() {
        return (
            <div>
                <Navbarr />
            <div id = "contact">

           
			<div className="section-content">
				<h1 className="section-header">Get in <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
				<h3>Got a question ? Feedback? Awesome!<br/>
Send your message in the form below and we will get back to you as soon as possible.</h3>
			</div>
            <br/>
            <div id = "showMessage"></div>
			<div className="contact-section">
			<div className="container">
				<form onSubmit = {this.contactSubmit} method = "POST">
					<div className="col-md-6 form-line">
			  			<div className="form-group">
			  				<label htmlFor="InputUsername">Your name</label>
					    	<input type="text" className="form-control" id="" placeholder=" Enter Name" name ="contactUsName" required/>
				  		</div>
				  		<div className="form-group">
					    	<label htmlFor="InputEmail">Email Address</label>
					    	<input type="email" className="form-control" id="exampleInputEmail" name ="contactUsEmail" placeholder=" Enter Email id" required/>
					  	</div>	
					  	
			  		</div>
			  		<div className="col-md-6">
			  			<div className="form-group">
			  				<label htmlFor ="description"> Message</label>
			  			 	<textarea  className="form-control" id="description" name ="contactUsdescription" placeholder="Enter Your Message"></textarea>
			  			</div>
			  			<div>

			  				<button type="submit" className="btn btn-default submit"><i className="fa fa-paper-plane" aria-hidden="true"></i>  Send Message</button>
			  			</div>
			  			
					</div>
				</form>
			</div>
		
         </div>
         </div>
         </div>

        );
    }
}
export default ContactUsForm;