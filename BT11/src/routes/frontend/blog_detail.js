
const express = require('express')
const router = express.Router()

const HomeController = require(`${__path_controllers}/home_controller`)

 
router
    .route('/')
    .get(HomeController.ListMenu)
    
router
    .route('/product')
    .get(HomeController.ListProduct)
    
router
    .route('/blog(/:slug)?')
    .get(HomeController.ListBlog) 

router
    .route('/blog_detail(/:slug)?')
    .get(HomeController.ListBlogDetail)
    


module.exports = router;