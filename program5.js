var fs = require('fs');
var path = process.argv[2];
var filter = process.argv[3];
var re = new RegExp('.*\.' + filter, 'g');
var files= fs.readdir(path, function(err, list){
	for(var i in list){
		if(list[i].match(re)){
			console.log(list[i]);
		}
	}
});