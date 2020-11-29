const express 	= require('express');
const userModel		= require('../models/userModel');
//const userModel = require('../models/blogModel');
const router 	= express.Router();

router.get('/', (req, res)=>{

	
		res.render('registration/index');
    
});


router.post('/',(req,res)=>{

    var user={
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
       
        photo:'1.jpg',
        type:req.body.type
    }
    userModel.insert(user,function(status){
        if(status){
            res.redirect('/login');
        }
    
    })

   
});




module.exports = router;

