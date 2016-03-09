'use strict';

var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
	console.log(req.query);
	res.send("Hola Express");
});
router.get("/:id([0-9]+)/piso/:piso(A|B|C)", function(req, res){
	console.log(req.params);
	res.send("Por id y pisoo: ");
});
router.get("/:id([0-9]+)", function(req, res){
	console.log(req.params.id);
	res.send("Por id: ");
});

router.get("/:id", function(req, res){
	console.log(req.params);
	res.send("Hola Express");
});

router.post("/", function(req, res){
	//post a http://localhost:3000/admin
	console.log(req.body);
	res.send("body recogido");
});

module.exports = router;
