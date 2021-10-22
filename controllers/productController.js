var Product= require('../models/product');



//---------------------Create New Product---------------------//
/* This function is used to create a new product.
It also updates 2 way referencing in user*/
exports.product_create_post = function(req, res) 
{   
    console.log("hello")
    let product = new Product(
        {
            name: req.body.name,
            image: req.body.image, 
            price: req.body.price
        });
        product.save()
        .then((newproduct) =>{
          res.status(200)
              .redirect('/listing');
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            message: err,
          });
        });
    };

//-------------------------Get all products------------------------//
/* This function is used to get every product from database */
exports.product_list_get = function(req, res) {
    Product.find()
    .sort({time_stamp:-1})
    .then(function (list_products) {
        res.status(200).json({
            success: true,
            data:list_products
        });
      }).catch((err) => {
        res.status(500).json({
            success:false,
            message:err
        }); 
      });
};

//------------------------Delete Product-----------------------//
/* This function is used to delete a product*/
exports.product_delete_post = function(req, res) {
    Product.deleteOne({name:req.body.name})
    .then(function(){
        res.status(200).json({
            success:true,
        });
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:err
        });
    });
};

//------------------------Update Product-----------------------//
/* This function is used to update a product*/
exports.product_update_post = function(req, res) {
    Product.findOneAndUpdate({name:req.body.name},{$set: {image:req.body.image, price:req.body.price}})
    .then(function(){
        res.status(200).json({
            success:true,
        });
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:err
        });
    });
};