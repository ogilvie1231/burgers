var express = require("express");

var PORT = process.env.PORT || 9090;

var app = express();
var db = require("./models/burgers");

var connection = require('./config/connection')

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");
      
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");

// app.use(routes);


app.listen(PORT, function() {
    // eslint-disable-next-line no-console
    console.log("App listening on PORT " + PORT);
});