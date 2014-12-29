// juggling async
var http = require('http');
 
var urls = process.argv.slice(2),
	flag = 0,
	result = {};
 
function processUrl(url){
	http.get(url, function(response){
		response.on("data", function(data){
			if(typeof result[url] == 'undefined'){
				result[url] = [];
			}

			result[url].push(data.toString());
		});
 
		response.on("end", function(data){
			callback(null, url);
		});
 
		response.on("error", function(err){
			callback(err, url);
		});
	});
}
 
function callback(err, url){
	if(err){
		return;
	}
 
	flag++;
 
	if(flag == urls.length){
		for(var i in urls){
			console.log(result[urls[i]].join(""));
		}
	}
}
 
urls.forEach(processUrl);