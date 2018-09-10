import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Formcounter } from 'react-bootstrap';
import './Adminprofile.css';
import axios from 'axios';
import Navbarr from './navbar.js';
import { withRouter } from 'react-router';
import AdminNavbar from './adminNavbarr.js';



class AdminPanle extends Component {

    constructor(props){
        super(props);
        this.sendNotification = this.sendNotification.bind(this);
        this.dell = this.dell.bind(this);
       this.state = {
           data:[],
           
           
       }}
    
       //Send Notification


       sendNotification=(e)=>{

 
        var Row = document.getElementById(e);
 var Cells = Row.getElementsByTagName("td");
       
       let emailTable =  Cells[1].innerText;
       let nameTable =  Cells[2].innerText;
        debugger;
        
 
        if ( !emailTable) {
            alert(" Please Enter Data Correctly");
          } else {
              let NotificationRecord = {
                 
                 emailTable,
                 nameTable
              
              }
            axios.post('/contactUs/notification',NotificationRecord).then((response)=>{
            
                console.log(response.data);
                if(response.data){
                alert("Notification has been send");
               this.props.history.push('/adminPanel');
                    // localStorage.setItem("appData",   JSON.stringify({user:response.data}));
                    // JSON.stringify({user:response});
             //    this.props.history.push('/adminPanel');
 
                } 
               
            }).catch((err)=>{
                console.log(err);
                alert("Notification has been send");
               
                // alert("err");
                
            })
              
          }
     }




       
    
    dell=(e)=>{
        console.log(e);
      
       
debugger;
//        var Row = document.getElementById(e);
// var Cells = Row.getElementsByTagName("td");
      
//       let emailTable =  Cells[1].innerText;
    
       

//        if ( !emailTable) {
//            alert(" Please Enter Data Correctly");
//          } else {
             let recordtabel = {
               
                emailTable:e
             
             }
             console.log(recordtabel);
             debugger;
           axios.post('/contactUs/delete',recordtabel).then((response)=>{
           
               console.log(response.data);
               if(response.data){
               alert("really want to delete this data.?")
               let message = document.getElementById("deleteData");
               message.innerHTML = "Your Data has been deleted";
               message.style.backgroundColor = "red";
               message.style.textAlign = "center";
               setTimeout(() => {
                message.innerHTML = "";
                this.props.history.push('./adminPanel')
               }, 4000);
                   // localStorage.setItem("appData",   JSON.stringify({user:response.data}));
                   // JSON.stringify({user:response});
            //    this.props.history.push('/adminPanel');

               } 
              
           }).catch((err)=>{
               console.log(err);
               alert("ok");
               // alert("err");
               
           })
             
         
    }

//     openInput = (e)=>{
// e.preventDefault();

        
//     }




componentDidMount=()=>{
    axios.post('/contactUs/panel',"202").then((response)=>{
                
        console.log(response.data);
        
        if(response.data){
            this.setState({data:response.data});
            // console.log(this.setState(response.data[0]))
            // console.log(this.state[0].message);
            
            
            
            // localStorage.setItem("appData",   JSON.stringify({user:response.data}));
            // JSON.stringify({user:response});
        // this.props.history.push('/');

        } 
       
    }).catch((err)=>{
        console.log(err);
        let message = document.getElementById("loginFailed_Message");
        message.innerHTML = "your email or password is wrong";
        message.style.backgroundColor = "red";
        message.style.textAlign = "center";
        // alert("err");
        
    })

}

   
    
    render() {
        
        return (
            <div>
            <AdminNavbar history={this.props.history}/>
            
           
            <div id = "deleteData" ></div>
            <table id="customers">
            <thead>
  <tr>
    <th><h3>User FeedBack</h3></th>
    <th><h3>Email</h3></th>
    <th><h3>Name</h3></th>
    
    <th><h3>Status</h3></th>
  </tr>
  </thead>
  <tbody >
  {this.state.data.length > 0 ? this.state.data.map((donor, i) => {
      {console.log(this.state.data.length)}
      return(
 
  <tr id = {donor.email} key = {i}>
    <td ><h4>{donor.message}</h4></td>
    {/* {console.log(this.state.data.username)} */}
    <td><h3>{donor.email}</h3></td>
    <td>{donor.username}</td>
    
    <td> <button  onClick = {()=>this.sendNotification(donor.email)} className = "btn btn-primary">Send Response </button>|
    <button onClick = {()=>this.dell(donor.email)} className = "btn btn-danger">Delete </button>

    
    
    </td>
  </tr>
 
 
 
  
  
  
 
)
  ;
  
  }):
  <tr>
  <td className="noDonor ">There is no Feedback available yet Against your Search!</td>
</tr>
}
</tbody>
</table>

            
           
        </div>
    
             


                
            

        );
    }
}
export default withRouter(AdminPanle);