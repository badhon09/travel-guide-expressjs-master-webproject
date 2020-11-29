const express 	= require('express');
const userModel		= require('../models/userModel');
const blogModel = require('../models/blogModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
}); 




router.get('/', (req, res)=>{

	blogModel.getAll(function(results){
		res.render('user/index', {blog: results});
	});




	//res.render('user/index');
});

router.get('/profile', (req, res)=>{
	
	c=req.cookies['uname'];
	userModel.getProfile(c,function(results1){
		

		res.render('user/profile',{profile:results1});

});
});

router.get('/mywhislist', (req, res)=>{

	userModel.getwhislist(function(results1){
		res.render('user/whislist',{whislist:results1});
	

});
	
	

});
router.post('/' ,(req, res)=>{

	var bl = {
		category : req.body.category
	}
	userModel.getByCategory(function(results){
		res.render('user/index', {cblog: results});
	});
});

router.get('/mywhislist/add/:name',(req,res)=>{

	whl={
		name:req.params.name,
		username:req.cookies['uname'],
		date:'27/10/5'
	}

	userModel.insertwhislist(whl,function(results){
		res.redirect('/userhome');
	});
})


module.exports = router;