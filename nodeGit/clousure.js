'use strict';

var creaAgente = function(_edad){
	var edad = _edad;
	return{
		dimeEdad : function(){
			console.log("Yo tengo: ", edad);
			return edad;
		}
	}
};

var agente = creaAgente(30);
var agente2 = creaAgente(22);

console.log(agente.dimeEdad());
setTimeout(agente.dimeEdad, 2000);


console.log(agente2.dimeEdad());
setTimeout(agente2.dimeEdad, 2000);

