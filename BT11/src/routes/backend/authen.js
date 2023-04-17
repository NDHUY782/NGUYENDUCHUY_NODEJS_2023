const express = require('express')

const router = express.Router()
const authen_controller = require(`${__path_controllers}authen_controller`)
const { validate } = require(`${__path_validator}item`);


router
    .route('/')
    .post(authen_controller.list)

router
    .route('/')
    .post(authen_controller.login)
    
module.exports = router;





