// Schema definition file for our colour collection data

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema description for our colour document structure
var colourSchema = new Schema({
    "color": String,
    "category": String,
    "type": String,
    "code": {
        "rgba": [],
        "hex": String
    }
},{collection: 'colours'},{versionKey: false});

module.exports = Colour = mongoose.model('Colour', colourSchema);