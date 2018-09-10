const mongoose = require("mongoose");

var AddressSchema = mongoose.Schema(
    {
        area: String,
        city: String,
        province:String,
        country: String,
        longi: Number,
        lati: Number,

    
        
    },
    {
        timestamps:true,
    }
);
  var addressModel = module.exports = mongoose.model('AddressInfo', AddressSchema)
  module.export = addressModel;