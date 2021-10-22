var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');
var product_controller = require('../controllers/productController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET register page. */
router.get('/registeruser', function(req, res, next) {
  res.render('register');
});

/* GET listing page. */
router.get('/listing', function(req, res, next) {
  res.render('listing');
});

// Post request for registering new users.
router.post('/register', user_controller.user_register_post);

// Post request for login of users.
router.post('/login', user_controller.user_login_post);

// Post request for adding new products.
router.post('/addproduct', product_controller.product_create_post);

// Post request for updating products.
router.post('/updateproduct', product_controller.product_update_post);

// Post request for deleting products.
router.post('/deleteproduct', product_controller.product_delete_post);

// Get request for getting details of all products.
router.get('/listproduct', product_controller.product_list_get);

module.exports = router;
