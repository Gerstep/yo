'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// var ThingSchema = new Schema({
//   name: String,
//   info: String,
//   active: Boolean
// });

var ThingSchema = new Schema({
  title: String,
  description: String,
  verified: Boolean,
  created_at: {
  	type: Date,
  	default: Date.now 
  },
  updated_at: Date,
  created_by: {
  	type: String,
  	default: 'Anonymous'
  },
  url: String
});

module.exports = mongoose.model('Thing', ThingSchema);