var fs = require('fs');
var path = require('path');
module.exports = function(dirName, extName, callback){
	var re = new RegExp('.*\.' + extName, 'g');
	fs.readdir(dirName, function(err, list){
		if(err){
			return callback(err);
		}

		list = list.filter(function(file){
			return path.extname(file) === '.' + extName;
		});

		callback(null, list);
	});
};