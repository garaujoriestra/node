"use strict";

var async = require("async");

console.log("Empiezo");
var escribeTras2Segundos = function(texto, callbackNuestro){
	setTimeout(function(){
		console.log(texto);
		callbackNuestro();
	}, 500);
};

async.eachSeries([1,2,3,4,5],
	function cada(item, siguiente){
		escribeTras2Segundos(item, function(){
			var resultado = item % 2 ? null : "error";		
			siguiente(resultado);
		});
	},function fin(err){
		console.log("Fin",err);
	}
);
