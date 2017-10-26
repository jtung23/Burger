var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burger: data
		};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/api/burgers', function(req, res) {
	console.log(req);
	burger.create([
		null
	], [
		"burger", "devoured"
	], [
		req.body.burger, false
	], function(result) {
		res.json({ id: result.insertId});
	});
});

module.exports = router;