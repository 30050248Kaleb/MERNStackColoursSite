var express = require('express');
var mongoose = require('mongoose');

var bodyparser = require('body-parser');

// Add reference to the routes file
var colourroute = require('./routes/api/colourroute');

var app = express();
// Add body parser middleware to handle JSON data
app.use(bodyparser.json());

// Bring in the database connect key
var db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function() {
        console.log('MongoDB connected...');
    })
    .catch(function(err) {
        console.log(err);
    });

//var port = 3000;

var port = process.env.PORT || 5000;

app.use('/api/colours', colourroute);

app.get('/', function(req, res) {
    res.json({reply:'Route for HOME path'});
});
// Route for Error 404
app.get('*' , function(req, res) {
    res.send('Error 404: Page not found');
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});