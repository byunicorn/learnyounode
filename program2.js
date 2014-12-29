var add = function(a, b){
	return Number(a) + Number(b);
}
console.log(process.argv.slice(2).reduce(add));