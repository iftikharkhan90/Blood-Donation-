const router = require("express").Router()
var donorDetails = require('../controllers/DonorController');
var passport = require('passport');
var requireDonor = require('../model/UserSchema');
var requiredAddress = require('../model/AddressSchema');

router.post('/data',(req,res)=>{
    
console.log(req.body);
requireDonor.find({bloodGroup:req.body.bloodNeed}).populate('address').exec(function(err, Donorinfo){
if(err){
    re.json("error");
}
if(!Donorinfo){
    
    res.status(200);
    res.json('there is no donor from this Area is available.');
}
if(Donorinfo){
     let result = Donorinfo.filter((index)=>index.address.city === req.body.areaNeed);
     console.log(result);
     
     res.json(result);
}

})

     
    
    
    

});
module.exports = router;