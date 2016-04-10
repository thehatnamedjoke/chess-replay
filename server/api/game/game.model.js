'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  moves: []
});

module.exports = mongoose.model('Game', GameSchema);
