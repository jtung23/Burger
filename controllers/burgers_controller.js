var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
// var burger = require("../models/cat.js");

router.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/test.html"))
});

module.exports = router;

  // cat.all(function(data) {
  //   var hbsObject = {
  //     cats: data
  //   };
  //   console.log(hbsObject);
  //   res.render("index", hbsObject);
  // });