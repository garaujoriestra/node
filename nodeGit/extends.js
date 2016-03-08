'use strict';
var EventEmitter = require("events").EventEmitter;
var extend = require("util")._extend;
var Persona = function(name){
	this.name = name;
}; 
Persona.prototype.saluda = function(){
	console.log("hola soy : ",this.name);
};

var Agente = function(name){
	Persona.call(this,name);

};
Agente.prototype = new Persona("Soy un prototipo");

Agente.prototype = extend(Agente.prototype, EventEmitter.prototype);


var smidth = new Agente("Smidth");
smidth.saluda();
smidth.on("llamada de telefono", function(data){
	console.log("evento: ", data);
});
smidth.emit("llamada de telefono", {payload: 55000});