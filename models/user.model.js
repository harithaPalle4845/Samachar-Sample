const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const mongoosastic = require('mongoosastic');
var elasticsearch = require('elasticsearch');




var userSchema = new Schema({
    name: {
       type:String,es_indexed : true
    },
    age: { type: Number, min: 0 ,es_indexed : true}
  });

  userSchema.plugin(mongoosastic, {
    host: process.env.ELASTICSEARCH_URL,
    port: 9200
  });
  
  var UserModel = mongoose.model("User", userSchema);

  module.exports = UserModel;

  
