
const express = require('express')
const router = express.Router()

const LoginController = require(`${__path_controllers}/login_controller`)

 
router
    .route('/')
    .get(LoginController.Login)
    
    
router
    .route('/blog(/:slug)?')
    .get(LoginController.Login) 


module.exports = router;