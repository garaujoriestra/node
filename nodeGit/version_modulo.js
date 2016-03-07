"use strict";

//Cargar libreria
var fs = require("fs");

var versionModulo = function(modulo, callbackNuestro){
	console.log(modulo);
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
});


