
const UserModel = require('../models/user_model');
const nodemailer = require('nodemailer')


const loadRegister = async(req,res)=> {
    try {

        res.render('./../views/frontend/page/users/registration.ejs')
        
    } catch (error) {
        console.log(err.message)
    }
}
// ------------Send Maill---------------
const sendMail = async(name,email,user_id) => {
    try {
        let transporter = nodemailer.createTransport({
                
            service: "gmail",
            auth: {
            user:'huynguyen07080112@gmail.com', // generated ethereal user
            pass: 'llaxqymogthnyypt', // generated ethereal password
            },
        });

        
        const mailOption = {
            from: 'huynguyen07080112@gmail.com', // sender address
            to: "<huynguyen07080112@gmail.com", // list of receivers
            subject: "Please Check Ur Mail", // Subject line
            text: "Xin Cảm Ơn - Chúc Bạn Có 1 Ngày Tốt Lành", // plain text body
            html: '<p>Hello'+name+',please click here to <a href="http://localhost:3000/verify?id='+user_id+'"> Verified </a> your mail.</p>'
        } 
        transporter.sendMail(mailOption,function (error,info) {
            if (err) {
                console.log(error)
            } else {
                console.log("email has been sent",info.response)
            }
        })
        

    } catch (error) {
        console.log(error.message)
    }
}

const insertUser = async (req,res) => {
    try {
        const user = new UserModel({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mno,
            image: req.file.filename,
            password: req.body.password,
            is_admin: 0,

        });

        const userData = await user.save()

        if(userData) {

            sendMail(req.body.name,req.body.email,userData._id)

            res.render('./../views/frontend/page/users/registration.ejs',{message:"ur registration has been successfully"})
        }
        else {
            es.render('./../views/frontend/page/users/registration.ejs',{message:"ur registration has been fallure"})
        }

    } catch (error) {
        console.log(err.message)
    }
}

const verifyMail = async(req,res)=> {
    try {
       const updateInfo = await UserModel.find({_id:req.query.id})
       console.log(updateInfo)
       res.render('./../views/frontend/page/users/email-verified.ejs')

    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {
    loadRegister,
    insertUser,
    verifyMail,
 
}
