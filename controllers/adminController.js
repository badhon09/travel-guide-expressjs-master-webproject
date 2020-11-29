const express 	= require('express');
const userModel		= require('../models/userModel');
const blogModel = require('../models/blogModel');
const router 	= express.Router();

router.get('/', (req, res)=>{

	c=req.cookies['uname'];
	userModel.getProfile(c,function(results1){
		
 


	userModel.getAll(function(results){
		res.render('admin/index', {blog: results,profile:results1});
	});
});
});
router.get('/scouts/delete/:id', (req, res)=>{

	userModel.deleteuserbyid(req.params.id,function(results){
		res.redirect('adminhome/scouts')
    });
});

router.get('/users', (req, res)=>{

	userModel.getAllUsers(function(results){
		res.render('admin/users', {users: results});
    });
});
router.get('/users/delete/:id', (req, res)=>{

	userModel.deleteuserbyid(req.params.id,function(results){
		res.redirect('adminhome/users')
    });
});

router.get('/scouts', (req, res)=>{

	userModel.getAllScouts(function(results){
		res.render('admin/scout', {users: results});
    });
});


router.get('/posts', (req, res)=>{

	blogModel.getAll(function(results){
		res.render('admin/posts', {users: results});
    });
});


module.exports = router;

