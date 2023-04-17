
const AuthenModel = require('../models/authen_model');
const bcrypt = require('bcrypt')

module.exports = {
    list: async (req , res , next) => {
        const {username,password,roles }     = req.body 
        const userLogin = await AuthenModel.create({username, password,roles})

        res.send({
            userLogin
        }
        ) 
        console.log(userLogin)
    },
    login: async (req , res , next) => {
        const {username,password,roles }     = req.body 

        const user = await AuthenModel.findOne({username})
        res.send({
            username
        }
            
        ) 
    },
}
