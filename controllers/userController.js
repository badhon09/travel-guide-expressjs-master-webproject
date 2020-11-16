const express 	= require('express');
//const userModel		= require.main.require('./models/userModel');
const userModel = require('../models/blogModel');
const router 	= express.Router();

router.get('/', (req, res)=>{

	userModel.getAll(function(results){
		res.render('user/index', {blog: results});
	});




	//res.render('user/index');
});
router.post('/' ,(req, res)=>{

	var bl = {
		category : req.body.category
	}
	userModel.getByCategory(function(results){
		res.render('user/index', {cblog: results});
	});
});


module.exports = router;