var http=require('http');
var fs=require('fs');

var myReadStream=fs.createReadStream(__dirname+'/readme.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname+'/writeme.txt');

myReadStream.on('data',function(chunk){
	console.log('new chunk received');
	myWriteStream.write(chunk);
	//console.log(chunk);
});