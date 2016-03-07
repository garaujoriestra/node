"use strict";

console.log("Empiezo");
var escribeTras2Segundos = function(texto, callback){
	setTimeout(function(){
		console.log(texto);
		callback();
	}, 2000);
};

escribeTras2Segundos("Primero",function(){
	escribeTras2Segundos("Segundo",function(){
		console.log("Fin");
	});
});
