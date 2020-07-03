const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');

var Schema = mongoose.Schema;

mongoose.pluralize(null);


var CategorySchema = new Schema({
    name: {
      type: String,es_indexed : true
    }
  });
  CategorySchema.plugin(mongoosastic, {
    host: process.env.ELASTICSEARCH_URL,
    port: 9200,
    index: 'category'
 
  });


  
  module.exports = category = mongoose.model('category', CategorySchema);
