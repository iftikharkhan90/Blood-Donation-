import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Formcounter } from 'react-bootstrap';
import './AdminLogin.css';
import axios from 'axios';
import Navbarr from './navbar.js';
import { withRouter } from 'react-router';
import { Modal } from 'react-bootstrap';
import AdminLoginForm from './AdminLogin.js';
import './forgotpopup.css';






class AdminTrigger extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);
    this.forgotEmail = this.forgotEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.state = {
      show: false,
      checkemail: false,
      email: ""
    };
  }
  componentDidMount() {
    this.setState({ show: true });
  }
  handleHide() {
    this.setState({ show: false });
    this.props.history.push('/admin123');
  }
  // email

  updatePassword = () => {
    let pass = this.refs.pass.value.trim();
    let mail = this.state.email;
    if (!pass) {
      alert(" Please fill the field");
    } else {
      let updatePass = {
        pass,
        mail

      }
      axios.post('/user/updatePassword', updatePass).then((response) => {

        console.log(response);
        if (response.data = "password has been updated") {
          debugger;

          // JSON.stringify({user:response});
          this.props.history.push('/admin123');

        }

      }).catch((err) => {
        console.log(err);
        alert();

      })

    }

  }


  forgotEmail = (e) => {

    e.preventDefault();


    let inputEmailField = this.refs.forgotmail.value.trim();


    if (!inputEmailField) {
      alert(" Please fill the field");
    } else {
      let forgotrecord = {
        inputEmailField,

      }
      axios.post('/contactUs/checkEmail', forgotrecord).then((response) => {

        console.log(response);
        debugger;
        if (response.status = 200) {

          this.setState({
            checkemail: true,
            email: inputEmailField
          })

          // JSON.stringify({user:response});
          // this.props.history.push('/profile');

        }

      }).catch((err) => {
        console.log(err);
        debugger;
        let message = document.getElementById("Mess");
        message.innerHTML = "You are not Admin or your email is wrong";
        message.style.backgroundColor = "red";
        message.style.textAlign = "center";
        // setTimeout(function(){ this.props.history.push('/registerform'); }, 2000);

        // alert("err");

      })

    }

  }

  render() {
    return (
      <div>
        <AdminLoginForm />
        <div className="modal-container" style={{ height: 200 }}>


          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Contained Modal
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div id="Mess"></div>
              <form>


                {this.state.checkemail ?
                  <div>
                    <label>Enter your new password:</label>
                    <input className="popupInput2" type="password" ref="pass" />
                  </div>
                  :
                  <div>
                    <label>Email:</label>
                    <input className="popupInput" type="email" ref="forgotmail" placeholder="Enter your email" /></div>}
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
              {this.state.checkemail ?
                <Button onClick={this.updatePassword}>update</Button>
                :
                <Button onClick={this.forgotEmail}>Verify</Button>}

            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(AdminTrigger);