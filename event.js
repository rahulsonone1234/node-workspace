var events =require('events');
//sample event 
 /* var myEmitter=new events.EventEmitter();

myEmitter.on('someevent',function(mssg){
    console.log(mssg);
});

myEmitter.emit('someevent','the event was emitted');*/

var util=require('util'); 

var Person =function(name){
    this.name=name;
};

util.inherits(Person,events.EventEmitter);
var james=new Person('james');
var nary=new Person('nary');
var hari=new Person('hari');

var people=[james,nary,hari];

people.forEach(function(Person){
    Person.on('speak',function(mssg){
        console.log(Person.name+' said:'+mssg);
    });
});

james.emit('speak','hey dudes');
nary.emit('speak','cool');