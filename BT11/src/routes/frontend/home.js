const express = require('express')

const router = express.Router();

router.get('/' , (req , res , next) => {
    console.log('kkk')
    res.render('frontend/page/home/index' , {title : 'Frontend'})
})

module.exports = router;