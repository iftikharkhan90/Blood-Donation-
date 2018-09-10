
const router = require("express").Router()
var donorDetails = require('../controllers/DonorController');
var passport = require('passport');
let updateDonorInfo = require('../model/UserSchema');
let updateAddress = require('../model/AddressSchema');

// router.post('/',(req,res)=>{
//     if(req.isAuthenticated()){
//        res.status(200);
//        res.end("user  is authenticated");
//     }
//     else{
//         res.status(500);
//         res.end("user is not authenticated");
//     }
//     })
    // router.post('/getUserData',(req,res)=>{
    //      res.status(200);
    //      res.json(req.user);
    //     })

  router.post('/setNewUserData',(req,res)=>{
      console.log(req.body);
      let updateObj = {
             name: req.body.donorName,
             age:req.body.donorAge,
             weight : req.body.donorWeight,
             bloodGroup:req.body.DonorBlood,
             email: req.body.donorEmail,
             password: req.body.donorPassword,
             mobNO : req.body.donorMobile,
           

      }
      let updatedAddress = {
        area: req.body.donorArea,
        province:req.body.donorProvince,
        city : req.body.donorCity,
        country:req.body.donorCountry,
        longi: req.body.longi,
        lati: req.body.lati,
        

 }
      console.log(updateObj);
      console.log(req.user);
      console.log(updatedAddress);
      updateDonorInfo.findByIdAndUpdate(req.user.id, updateObj, {new:true}, function(err, updatedata){
if(err){
    res.json(err);
}
if(updatedata){


    updateAddress.findByIdAndUpdate(req.user.address, updatedAddress, {new:true}, function(err, updateAddress){
        if(err){
            res.json(err);
        }else{

            res.json("address has been   updated")
            
        }
        
        
        
        
              })

    
}




      })


      

      
         
        })

    module.exports = router;