
const router = require("express").Router()
var donorDetails = require('../controllers/DonorController');
var passport = require('passport');
var DonorInfo = require('../model/UserSchema');
var addressCheck = require('../model/AddressSchema');


router.post('/registerForm', donorDetails);
router.post('/checkEmail',(req,res)=>{
    console.log(req.body);
    DonorInfo.findOne({ email: req.body.inputEmailField }, function (err, user) {
        console.log(user)
        if (err) {  res.end(err) }

        if (!user) {
             res.status(200);
             res.json("email not in use");
        }
        else{
            res.status(200);
            res.json("email is already in use");
        }
        
    });


});




router.post('/loginform',passport.authenticate('local'),(req,res)=>{
    
    if (req.isAuthenticated()) {
        res.status(200);
        res.json(req.user);        
    }
    else{
        res.status(500);
        res.json("Your email or password is wrong")
    }
})
  
// get userData


router.post('/getUserData',(req,res)=>{

console.log(req.user);
//addressCheck.findOne({ _id: req.user.address }, function (err, address) {
   // console.log(address)
   // if (err) {  res.end(err) }

    // if (!address) {
    //      res.status(200);
    //      res.json("id no found");
    // }
    // else{
        // console.log(req.user);
        // let name = req.user.name;
        // let age = req.user.age;
        // let weight = req.user.weight;
        // let bloodGroup = req.user.bloodGroup;
        // let email = req.user.email;
        // let password = req.user.password;
        // let mobNo = req.user.mobNO;
        // let data = {name,age,weight,bloodGroup,email,password,mobNo,address}
        res.status(200);
        res.json(req.user);
   // }
    
//});

   
    // req.logout()
    // res.status(200);
    // res.end("succfully lougout");

});

router.post('/logout',(req,res)=>{
     console.log(req);
        req.logout()
        res.status(200);
        res.json("succfully lougout");
    
});





router.post('/updatePassword',(req,res)=>{
    console.log(req.body);
    console.log(req.body.mail);
    let updateObj = {
        
        password: req.body.pass,
        
        
      

 }

 DonorInfo.findOneAndUpdate({email:req.body.mail}, updateObj, {new:true}, function(err, updatedata){
     console.log(updatedata.email);
    if(err){
        res.json(err);
    }
    else{
    res.status(200);
    res.json("password has been updated");
    
       
           
    
              
                
            
            
            
            
            
                  
    
        
    }
    
    
    
    
          })
    


       
      
   
});


module.exports = router;

