const { Schema , model } = require("mongoose")

const bcrypt = require('bcrypt')


const userModel = new Schema({
    name : {
        type : String,
        require:true,
        minLenght:3,
        maxLenght:60
    },
    password : {
        type: String,
        require:true,

    },
    email: {
        type: String,
        require:true,
    },
    mobile: {
        type: String,
        require:true,
    },
    image: {
        type: String,
        require:true,
    },
    is_admin:{
        type: Number,
        require:true,
    },
    is_varified:{
        type: Number,
        default:0
    }

}, {
    timestamps : true
}) 

userModel.pre("save" , async function(next) {
         if(!this.isModified('password')) {
            return(next)
         }
         const hash = await  bcrypt.genSalt(10)
         .then((salt => bcrypt.hash(this.password, salt)));
         this.password = hash;
         next()

    })

module.exports = model('usermodels' , userModel)
