// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Reservations (DATA)
// =============================================================
var reservations = [];



// Routes
// =============================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservations", function(res, res) {
    res.sendFile(path.join(__dirname, "form.html"));
});

app.get("/waiting-list", function(req, res) {
    res.sendFile(path.join(__dirname, "list.html"));
});

app.get("/api/reservations", function(req, res) {
    res.json(reservations);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });