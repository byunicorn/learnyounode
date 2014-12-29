// time server
var net = require('net');
 
function fillZero(number){
	if(number >= 10){
		return number.toString();
	}
 
	return "0" + number;
}
 
if(!String.format) {
	String.format = function(format) {
		var args = Array.prototype.slice.call(arguments, 1);
		return format.replace(/{(\d+)}/g, function(match, number){
			return typeof args[number] != 'undefined' ? args[number]: match;
		});
	}
}
 
var server = net.createServer(function(socket){
	var d = new Date();
	var result = String.format('{0}-{1}-{2} {3}:{4}', d.getFullYear(), fillZero(d.getMonth() + 1), fillZero(d.getDate()), fillZero(d.getHours()), fillZero(d.getMinutes()));
	socket.end(result);
});
 
server.listen(process.argv[2]);