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

// Create New Characters - takes in JSON input
app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    // console.log(req);
    // console.log(res);
    var newReservation = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    // console.log(newcharacter);
  
    reservations.push(newReservation);
  
    res.json(newReservation);
  });







// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });