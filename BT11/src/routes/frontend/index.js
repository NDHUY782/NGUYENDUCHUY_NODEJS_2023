const express = require('express')
const router = express.Router();
const Middleware_menu = require('../../middleware/get_menu')
router.use((req, res, next) => {
    req.app.set('layout', 'frontend/index.ejs');
    next();
});


router.use('/' ,Middleware_menu, require('./home'))

router.use('/contact' , require('./contact'))

module.exports = router;