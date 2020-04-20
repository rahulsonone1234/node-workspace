var fs = require('fs');

//fs.unlink('deleteme.txt',function(err,data){
//	console.log('test');

//});
//fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');

/*fs.mkdir('stuff',function(){
	fs.readFile('readme.txt','utf8',function(err,data){
		console.log('test');

		fs.writeFile('./stuff/writeme.txt',data,function(err,data){});
	});

});*/

//fs.rmdir('stuff',function(err,data){});
fs.unlink('./stuff/writeme.txt',function(err,data){});
fs.rmdir('stuff',function(err,data){});

