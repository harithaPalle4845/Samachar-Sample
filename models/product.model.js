const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const mongoosastic = require('mongoosastic');


mongoose.pluralize(null);


  var ProductSchema = new Schema({
    name  :    {type: String,es_indexed : true},

    category: {
      type        : Schema.Types.ObjectId,
      ref         : 'category',
      es_indexed  : true,
      es_select   : 'name',
      es_include_in_parent: true
  
    },
  
    created_at    : {type : Date, default : Date.now}
  });
  ProductSchema.plugin(mongoosastic, {
    host: process.env.ELASTICSEARCH_URL,
    port: 9200,
    index: 'product',
    populate: [
      {path: 'category', select: 'name'}
    ],
    
  },{hydrate:true, hydrateOptions: {lean: true}}
  );
  


  module.exports = product = mongoose.model('product', ProductSchema);




  