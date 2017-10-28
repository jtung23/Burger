var express = require('express');
var method = require('method-override');
var bodyParser = require('body-parser');

var app = express();

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port, function(err) {
	if (err) throw err;
});
