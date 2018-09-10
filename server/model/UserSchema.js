const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

var DonorInfoSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        weight: Number,
        bloodGroup: String,
        email: {
            type: String,
            required: "email is required"
        },
        password: {
            type: String,
            required: "password is required"
        },
        mobNO: Number,

        address: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AddressInfo",
            required: "Comments is required field",
        }

    },
    {
        timestamps: true,
    }
);

// DonorInfoSchema.methods.encryptPassword = ()=>{
//     return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null)
// }
// DonorInfoSchema.methods.validPassword = (password)=>{
//     return bcrypt.compareSync(password,this.password)
// }
  module.exports = mongoose.model('BasicInfo', DonorInfoSchema, )
// //passport functions 
// module.exports.getDonorByemail = function(email, callBack){
//     var querry = {email: email};
//      Donor.findOne(querry, callback)
// }

// module.exports.comparePassword = function(donorPassword, hash, callback){
//     bcrypt.compare(comparePassword, hash, function(err, isMatch){
//         if(err) throw err;
//         callback(null, isMatch);
//     })
// };

// module.exports.getDonorByID = function(id, callback){
//     Donor.findById(id, callback)
// };
