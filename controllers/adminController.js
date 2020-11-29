const express 	= require('express');
//const userModel		= require.main.require('./models/userModel');
const userModel = require('../models/blogModel');
const router 	= express.Router();

router.get('/', (req, res)=>{

	userModel.getAll(function(results){
		res.render('admin/index', {blog: results});
    });
});


module.exports = router;

