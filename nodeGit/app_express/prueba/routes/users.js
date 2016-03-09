var express = require('express');
var router = express.Router();
var user = require("../models/user_model.js");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/form', function(req, res, next) {
	user.getUsers(function(err, users){
		res.render('user_form',{users: users} );
	});
});

module.exports = router;
