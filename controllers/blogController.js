const express 	= require('express');
const userModel = require('../models/userModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/create', (req, res)=>{
	res.render('user/create');
});


router.post('/create', (req, res)=>{
	
	var user = {username:req.body.username, 
		password:req.body.password,
		 email:req.body.email};
	//var newlist = req.session.userlist;
	//newlist.push(user);
	//req.session.userlist = newlist;*/
	
	/*res.send('New user info:'+
				"<br> Username: "+req.body.username+
				"<br> Password: "+req.body.password+
				"<br> Email: "+req.body.email
			); */

			userModel.insert(user,function(status){
				if(status){
					res.redirect('/home/userlist');

				}
				else{
					res.redirect('user/create');
				}
			});
});

router.get('/edit/:id', (req, res)=>{

	var user = {
		username: 'test',
		password: 'test',
		email: 'alamin@aiub.edu'
	};
	res.render('user/edit', user);
});

router.post('/edit/:id', (req, res)=>{
	res.redirect('/home/userlist');
});

router.get('/delete/:id/:username/:password/:email', (req, res)=>{
	var currentUser = {
		username: req.params.username,
		password: req.params.password,
		email : req.params.email
	};
	res.render('user/delete', currentUser);
});

router.post('/delete/:id', (req, res)=>{

	var user = {
		id : req.params.id
	};
	userModel.delete(user, function(status){
		if(status){
			res.redirect('/home/userlist');
		}else{
			res.redirect('/user/delete');
		}
	});



	//res.redirect('/home/userlist');
});

module.exports = router;

