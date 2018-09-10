var  AddressInfo = require('../model/AddressSchema');
var DonorInfo = require('../model/UserSchema');

function DonorDetails (req, res) {
    
    
    const newDonor = new DonorInfo();
    console.log(req.body)
    newDonor.name = req.body.donorName;
    newDonor.age = req.body.donorAge;
    newDonor.weight = req.body.donorWeight;
    newDonor.bloodGroup = req.body.DonorBlood;
    newDonor.email = req.body.donorEmail;
    newDonor.password = req.body.donorPassword;
    newDonor.mobNO = req.body.donorMobile;
    //Validation 
    // req.checkBody('newDonor.name', 'Name is required').notEmpty();
    // req.checkBody('newDonor.age', 'Age is required').notEmpty();
    // req.checkBody('newDonor.weight', 'Weight is required').notEmpty();
    // req.checkBody('newDonor.bloodGroup', 'BloodGroup is required').notEmpty();
    // req.checkBody('newDonor.email', 'Email is required').isEmail();
    // req.checkBody('newDonor.password', 'Password is required').notEmpty();
    // req.checkBody('newDonor.mobNO', 'MobNO is required').notEmpty();
    // var errors = req.validationErrors();

    // if(errors){
    //     console.log("validation error")
    // }
    // else{
    //    console.log("passed")
    // }

//Address 
    const donorAddress = new AddressInfo();
    //  console.log(req.body)
    donorAddress.area = req.body.donorArea;
    donorAddress.province = req.body.donorProvince;
    donorAddress.city = req.body.donorCity;
    donorAddress.country = req.body.donorCountry;
    donorAddress.longi = req.body.longi;
    donorAddress.lati = req.body.lati;
    
    donorAddress.save(function (err, address) {
        newDonor.address = address.id;
        console.log(address.id);
        newDonor.save(function (err, newDonor){
            res.json(donorAddress)
        })
    })
   

}
 
 module.exports = DonorDetails;