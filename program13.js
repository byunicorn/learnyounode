// http json api server
var http = require('http');
var url = require('url');
 
var server = http.createServer(function(req, res){
	var result,
		parsedUrl = url.parse(req.url, true);
	if(parsedUrl.pathname == '/api/parsetime'){
		var d = new Date(Date.parse(parsedUrl.query.iso));
		result = {
			"hour" : d.getHours(),
			"minute" : d.getMinutes(),
			"second" : d.getSeconds()
		};
	}else if(parsedUrl.pathname == '/api/unixtime'){
		var d = new Date(Date.parse(parsedUrl.query.iso));
		result = { "unixtime" : d.getTime() };
	}
 
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(result));
});
 
server.listen(process.argv[2]);