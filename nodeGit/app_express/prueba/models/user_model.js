'use strict';

var users = [
	{name: "Guillermo", age: 23},
	{name: "Marcos", age: 26},
	{name: "Kevin", age: 24},
	{name: "Lautaro", age: 23},
	{name: "Jose", age: 23},
	{name: "Miriam", age: 21},
];

var user = {
	getUsers: function(cb){
		//Imaginamos que lee un fichero
		var usuariosLeidos = users;
		
		//Devuelvo users
		cb(null, users);
	}

};

module.exports = user; 