

const express = require('express');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieparser =require('cookie-parser');
const mangoose = require('mongoose');
const app = express();
const LocalStrategy = require('passport-local').Strategy;

var setupPassport = require('./passport/passportlogin');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: "myusersession",
    resave: true,
  saveUninitialized: true,
}))
app.use(cookieparser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(cookieParser());
// app.use(session({secret:"secret", resave:true,saveUninitialized:true}));


app.use(passport.initialize());
app.use(passport.session());
setupPassport();

require("./mongoo");


//Models
require('./model/AddressSchema');
require('./model/UserSchema');
require('./model/feedBackSchema');

//MiddleWares



app.use('/user',require('./Routes/user'));
app.use('/contactUs',require('./Routes/feedback'));
app.use('/DonorProfile',require('./Routes/profile'));
app.use('/bloodRequired',require('./Routes/bloodRequired'));

 


app.use(express.static('./build'));
app.use((req, res, next) => {
    req.status = 404;
    const error = new Error("Routes not found");
    next(error);
})

//Error handler 

app.use('/', function(r, e){
    r.end(20)
})

app.use((error, req, res, next) => {
    res.status(req.status || 500).send({
        message: error.message,
        stack: error.stack,
    })
})



const port = 5000;
app.listen(port, () => console.log('App listening on port ' + port));
