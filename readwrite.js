var fs =require('fs');
//var readme=fs.readFileSync('readme.txt','utf8');//reading file abc synchronized method therefore it will wait untill it reads file it will not perform the other task untill it perfom this one
//console.log(readme);
//fs.writeFileSync('writeme.txt','readme');

//Asynchronizedbmethod
fs.readFile('readme.txt','utf8',function(err,data){
	//console.log(data);
	fs.writeFile('writeme.txt', 'data',function(err,data){

			console.log(data);
		});
});

//console.log('test');
