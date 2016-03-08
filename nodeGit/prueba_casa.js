'use strict';

//EJERCICIO PARA LEER DE DOS FICHEROS Y ESCRIBIR EN UN TERCERO
// VOY A LEER LAS VERSIONES DE PACKAGE SON DE LOS MODULOS Y ESCRIBIRLOS EN SUMA_PACKAGE.js


//Cargar libreria
var fs = require("fs");
var async = require("async");
var texto = "";

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
async.eachSeries(["chance","async"],
	function cada(item, siguiente){
		versionModulo( item, function(err,data){
			console.log("item:",data);
			texto +=	" " + data;	
			console.log("texto: ", texto);
			siguiente();
		});
	},function fin(err){
		console.log("Fin",err);
	}
);
