const express 	= require('express');
const userModel		= require('../models/userModel');
const blogModel = require('../models/blogModel');
const router 	= express.Router();
router.get('/', (req, res)=>{

  c=req.cookies['uname'];
  userModel.getProfile(c,function(results1){
    
 


  userModel.getAll(function(results){
    res.render('scout/index', {blog: results,profile:results1});
  });
});
});

router.get('/posts', (req, res)=>{

  
	blogModel.getAll(function(results){
		res.render('scout/posts', {users: results});
    });

});



    module.exports = router;

