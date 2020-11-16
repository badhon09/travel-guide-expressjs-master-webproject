const express 	= require('express');
const userModel		= require.main.require('./models/userModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	res.render('user/index');
});


module.exports = router;