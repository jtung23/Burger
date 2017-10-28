var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burger: data
		};
		res.render('index', hbsObject);
	});
});

router.post('/api/burgers', function(req, res) {
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

router.put('/api/burgers/:id', function(req, res) {
	var condition = "id = " + req.params.id;
	burger.update(
		{
			devoured: req.body.devoured
		},
		condition,
		function(result) {
			res.json({ id:result.insertId})
		}
	);
});

// router.delete('/api/burgers/:id', function(req, res) {
// 	var condition = "id = " + req.params.id;

// 	burger.delete(condition, )
// })

module.exports = router;