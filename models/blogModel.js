const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from users where name='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getByCategory: function(id, callback){
        var sql = "select * from blog where category='"+blur.catetory+"'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAll: function(callback){
		var sql = "select * from blog";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "insert into users(name,email,password) values ('"+user.username+"','"+user.email+"','"+user.password+"')";
		db.execute(sql,function(status){
			callback(status);
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