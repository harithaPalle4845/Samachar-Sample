const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Category = require('../models/category.model');



var productSchema = new Schema({
    name: {
      type: String
    },
    category: {type: Schema.Types.ObjectId, ref: 'Category'}

  });
  
  module.exports = product = mongoose.model('product', productSchema);
