/*module.exports.counter=function(arr)
{
    return 'There are'+arr.length+ 'Elements in this array';
};

module.exports.adder=function(a ,b)
{
    return `The sum of two numbers is ${a+b}`; 
};
module.exports.pi =3.142;*/

//module.exports.counter=counter;
//module.exports.adder=adder;
//module.exports.pi=pi;
var counter=function(arr)
{
    return 'There are'+arr.length+ 'Elements in this array';
};

var adder=function(a ,b)
{
    return `The sum of two numbers is ${a+b}`; 
};
var pi =3.142;

module.exports = {
counter:counter,
adder:adder,
pi:pi
};