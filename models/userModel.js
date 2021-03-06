const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from users where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){

	},
	getAll: function(callback){
		var sql = "select * from users";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAllUsers: function(callback){
		var sql = "select * from users where type='user'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getProfile: function(c,callback){
		var sql = "select * from users where username='"+c+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getwhislist: function(callback){
		var sql = "select * from whislist";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	deleteuserbyid: function(c,callback){
		var sql = "delete from users where id = '"+c+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAllScouts: function(callback){
		var sql = "select * from users where type='scout'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insertwhislist:  function(whl, callback){
		var sql = "insert into whislist(name,username,date) values ('"+whl.name+"','"+whl.username+"','"+whl.date+"')";
		db.getResults(sql,function(results){
			callback(results);
		});

	},
	insert: function(user, callback){
		var sql = "insert into users(name,username,email,password,photo,type) values ('"+user.name+"','"+user.username+"','"+user.email+"','"+user.password+"','"+user.photo+"','"+user.type+"')";
		db.getResults(sql,function(results){
			callback(results);
		});

	},
	update:function(user, callback){

	},
	delete: function(id, callback){
		var sql = "delete from user where id = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}