'use strict';

//Hacer objeto con métodos.

var persona = {
	name: "Luis",
	printName : function(){
		console.log(this.name);
	}
};
var mascota = {
	name : "Tobi"
};
//Llamarlo sin this

setTimeout(persona.printName.bind(persona), 500);

function saluda(func){
	func();
}	

persona.printName.call(mascota);
saluda(persona.printName.bind(persona));