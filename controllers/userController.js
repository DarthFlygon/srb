var User= require('../models/user');
var bcrypt = require('bcrypt');



//---------------------Register New User---------------------//
/* This function is used to register a new user*/
exports.user_register_post = function(req, res) 
{   
    let user = new User(
        {
            username: req.body.username,
            password: req.body.password, 
        });
        user.save()
        .then((newUser) =>{
          res.status(200)
              .redirect('/');
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            message: err,
          });
        });
    };

//--------------------- User login---------------------------//
/* This function is used to authenticate a user.*/
exports.user_login_post = function(req, res) {
    //Check for user in database
    User.findOne({username: req.body.username})
    .then(function (user_found){
        if(user_found){
            //Check Password
            bcrypt.compare(req.body.password, user_found.password )
            .then(function (result){
                if(result){
                    res.status(200)
                    .redirect('/listing');
                }
                else{
                    res.status(200).json({
                        success:false,
                        message:'Invalid password'
                    });
                }
                
                }).catch((err) => {
                    res.status(500).json({
                        success:false,
                        message:err
                    });
                });   
            }
        else{
            res.status(200).json({
                success:false,
                message:'Invalid username'
            });
        }
    }).catch((err) => {
            res.status(500).json({
                success:false,
                message:err
            });
        });  
};
