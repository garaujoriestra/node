'use strict';

//EJERCICIO PARA LEER DE DOS FICHEROS Y ESCRIBIR EN UN TERCERO
// VOY A LEER LAS VERSIONES DE PACKAGE SON DE LOS MODULOS Y ESCRIBIRLOS EN SUMA_PACKAGE.js


//Cargar libreria
var fs = require("fs");
var textoChance,textoAsync;

var versionModulo = function(modulo, callbackNuestro){
	fs.readFile("./node_modules/"+modulo+"/package.json", {encoding: "utf8"},function(err,data){
		if (err){
			callbackNuestro(err);
			return;
		}
		var paquete = JSON.parse(data);
		var version = paquete["version"];
		callbackNuestro(null,version);
	});
};

versionModulo( "chance", function(err, str){
	if (err){
		console.error("Hubo un error: ", err);
		return;	
	}
	console.log("La version del modulo es : ", str);
	textoChance = str;
	console.log("TextoChange ", textoChance);
});
versionModulo( "async", function(err, str){
	if (err){
		console.error("Hubo un error: ", err);
		return;	
	}
	console.log("La version del modulo es : ", str);
	textoAsync = str;
	console.log("TextoAsync ", textoAsync);

});

