var mymodule = require('./module6.js');
var dirName = process.argv[2];
var extName = process.argv[3];
mymodule(dirName, extName, function(err, list){
	if(err){
		throw err;
	}

	for(var i in list){
		console.log(list[i]);
	}
});