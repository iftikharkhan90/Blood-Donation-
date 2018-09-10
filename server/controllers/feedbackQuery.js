var  feedbackModels = require('../model/feedBackSchema');
var nodemailer = require('nodemailer');

function addFeedBack(req,res){
   var newfeedback =new feedbackModels();
   console.log(req.body);
   newfeedback.username = req.body.contactUsName;
   newfeedback.email = req.body.contactUsEmail;
   newfeedback.message = req.body.contactUsdescription;
   

   newfeedback.save((err,user) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    else{
  

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hamza.dawood007@gmail.com ',
    pass: 'hamza6202'
  }
});

var mailOptions = {
  from: 'hamza.dawood007@gmail.com',
  to: req.body.contactUsEmail,
  subject: 'Mail from Aldum Donor',
  text: `Hi,${req.body.contactUsName}! Thanks for your feedback you should register for blood donor in our website.`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

return res.json({'success':true,'message':'Todo added successfully',user});}
  })
}

module.exports = addFeedBack;