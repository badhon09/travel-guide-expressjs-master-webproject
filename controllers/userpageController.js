const express 	= require('express');
const userModel = require('../models/blogModel');
const router 	= express.Router();

router.get('/', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/index', {blog: results});
	});


	//res.render('home/index');
});

router.get('/userlist', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/userlist', {users: results});
	});
});


module.exports = router;