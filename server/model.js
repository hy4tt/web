var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Person', Schema);
