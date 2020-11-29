//declaration
const express 			= require('express');	
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');

const home				= require('./controllers/userpageController');
const userhome				= require('./controllers/userController');
const scouthome				= require('./controllers/scoutController');
const adminhome				= require('./controllers/adminController');
const login				= require('./controllers/login');
const logout			= require('./controllers/logout');
//const logout			= require('./controllers/logout');
//const home				= require('./controllers/home');

const app				= express();
const port				= 3000;

//configuration
app.set('view engine', 'ejs');


//middleware
app.use('/abc', express.static('assets'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));


app.use('/', home);
app.use('/login', login);
app.use('/userhome', userhome);
app.use('/scouthome', scouthome);
app.use('/adminhome', adminhome);
app.use('/logout', logout);
//router
app.get('/', (req, res)=>{
	res.render('home/index');
	res.send('Welcome');
});

//server startup
app.listen(port, (error)=>{
	console.log('server strated at '+port);
});