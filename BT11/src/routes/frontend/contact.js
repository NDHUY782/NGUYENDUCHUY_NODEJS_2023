const express = require('express')

const router = express.Router();

router.get('/' , (req , res) => {
    console.log('1222')
    res.render('frontend/page/contact')
})

module.exports = router;