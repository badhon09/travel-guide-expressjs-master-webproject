const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 		= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{

	var user = {
		username: req.body.username,
		password: req.body.password
	};

	userModel.validate(user, function(status){
		console.log('aaaaaaaaaaaaaaaa',status[0].type);
		if(status){

			if(status[0].type=="user"){
			//res.cookie('uname', req.body.username);
			
			res.redirect('/userhome');
		}
		else if(status[0].type=="admin"){
		
		//res.cookie('uname', req.body.username);
		
		res.redirect('/adminhome');
		
		}
		else if(status[0].type=="scout"){
		
			//res.cookie('uname', req.body.username);
			
			res.redirect('/scouthome');
		}else{
			
		}
	}else{
		res.redirect('/login');
	}
			
			
	
	});
	
}); 
module.exports = router;

