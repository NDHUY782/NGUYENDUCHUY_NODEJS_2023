const express = require('express')
const router = express.Router();
const Middleware_menu = require('../../middleware/data_load')

router.use((req, res, next) => {
    req.app.set('layout', 'frontend/index.ejs');
    next();
});


router.use('/' ,Middleware_menu, require('./home'))
router.use('/contact' , require('./contact'))
router.use('/blog' , require('./blog'))
router.use('/blog_detail' , require('./blog_detail'))



module.exports = router;