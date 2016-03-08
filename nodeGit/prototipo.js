'use strict';
//Funcion constructora
var Persona = function(name){
	this.name = name;
};
//Crear una instancia 
var luis = new Persona("Luis");
console.log(luis.name);
//cambiar su prototipo 
Persona.prototype.saluda = function(){
	console.log("hola soy : ",this.name);
};
luis.saluda();
// -----------------Herencia --------------
// Otro constructor que herada de persona.
var Agente = function(name){
	//Ejecutamos contructor heredado.
	//Lo mismo que llamar a super de java.
	Persona.call(this,name);
};
Agente.prototype = new Persona("Soy un prototipo");
var smidth = new Agente("Smidth");
smidth.saluda();

