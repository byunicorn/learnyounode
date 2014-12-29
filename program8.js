// http collect
var http = require('http');
var url = process.argv[2];
var result = [];
http.get(url, function(response){
	response.on("data", function(data){
		result.push(data.toString());
	});
 
	response.on("end", function(data){
		var output = result.join("");
		console.log(output.length);
		console.log(output);
	});
});