var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user.controller')
var CategoryController = require('../controllers/category.controller')
var ProductController = require('../controllers/product.controller')



router.get('/getUsers', UserController.getUsers)
router.post('/saveUser', UserController.saveUser)
router.get('/searchUser', UserController.searchUser)
router.get('/getProducts', ProductController.getProducts)
router.post('/saveProduct', ProductController.saveProduct)
router.get('/searchProduct', ProductController.searchProduct)
router.get('/suggestProduct', ProductController.suggestProducts)
router.get('/getCategories', CategoryController.getCategories)
router.post('/saveCategory', CategoryController.saveCategory)
router.get('/searchCategory', CategoryController.searchCategory)




module.exports = router;
