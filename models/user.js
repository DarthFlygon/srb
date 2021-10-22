var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    //Content
    username: {type: String, required: true, max: 50},
    password: {type: String, required: true, max: 20},
    flag:{type:Number, default:0},
    time_stamp: {type: Date, default:Date.now()},
  }
);

UserSchema.pre('save', function(next){
    let user = this
    bcrypt.genSalt(10).then(function(salt){
        bcrypt.hash(user.password, salt).then(function(encrypted){
            user.password = encrypted 
            next()
        })
    })
  })

module.exports = mongoose.model('User', UserSchema)