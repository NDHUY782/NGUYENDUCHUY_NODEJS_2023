
const express = require('express')
const router = express.Router()
var path = require('path');

const UserController = require(`${__path_controllers}/user_controller`)
const multer = require('multer');

const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}))


const storage = multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,path.join(__dirname,'../../public/uploads/items'))  
    },
    filename: function(req,file,cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null,name);
    }
});

const upload = multer({storage:storage});


router
    .route('/')
    .get(UserController.loadRegister)
 
router
    .route('/')
    .get(UserController.insertUser)

router
    .route('/')
    .post(upload.single('image') ,UserController.insertUser)

router
    .route('/verify')
    .get(UserController.verifyMail)


    

module.exports = router;