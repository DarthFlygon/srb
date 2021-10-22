var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema(
  {
    //Content
    name: {type: String, required: true, max: 50},
    image: {type: String, required: true, max: 20},
    price:{type:Number, default:0},
    time_stamp: {type: Date, default:Date.now()},
  }
);

module.exports = mongoose.model('Product', ProductSchema)