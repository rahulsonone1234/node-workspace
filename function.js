//normal function
function sayHi()
{
    console.log('Hi');
}

sayHi();

//function expression
var sayBye=function(){
    console.log('Bye');
};

sayBye();

//passing function in function
 function callFunction(fun)
 {
     fun();
 }
callFunction(sayBye);
