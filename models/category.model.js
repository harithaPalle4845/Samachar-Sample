const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var categorySchema = new Schema({
    name: {
      type: String
    }
  });
  
  module.exports = category = mongoose.model('category', categorySchema);
