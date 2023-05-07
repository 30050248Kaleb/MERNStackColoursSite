var express = require('express');
var router = express.Router();

// Import the colour model (schema) from the models folder
var colours = require('../../models/colour');

//@route    GET /api/colours
//@desc     Get all colours from the database
//@access   Public
router.get('/', function(req, res) {
    colours.find()
        .sort({color: 1})
        .then(function(color){
            res.json(color);
        })
        .catch(function(err){
            console.log(err);
        })
});

//@route    GET /api/colours/:colour?
//@desc     Get a single colour from the database
//@access   Public
router.get('/:colour?', function(req, res) {
    var requestedColour = req.params.colour;
    colours.findOne({color:requestedColour})
    .sort({color: 1})
    .then(function(color){
        if(color)
        {
            res.json(color);
        }
        else
        {
            res.send(`Error 404, colour "${requestedColour}" not found.`);
        }
    })
    .catch(function(err){
        console.log(err);
    })
});

//@route    POST /api/colours/:colour
//@desc     Add a new Colour to the DB
//@access   Public (for now – needs to be secured)
router.post("/", function(req, res) {
    var newColour = new Colour({
        color: req.body.color,
        category: req.body.category,
        type: req.body.type,
        code: {
            rgba: req.body.rgba,
            hex: req.body.hex
        }
    });

    newColour.save().then(function(color){
        res.json(color);
    }).catch(function(err) {
        console.log(err);
    });
})

module.exports = router;