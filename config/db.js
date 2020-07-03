const mongoose = require('mongoose');
   

  const init = () =>
  mongoose
    // .connect('mongodb://abdullatif:Hirensbootcd1@cluster0-shard-00-00-soij9.mongodb.net:27017,cluster0-shard-00-01-soij9.mongodb.net:27017,cluster0-shard-00-02-soij9.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true })
    .connect('mongodb://localhost:27017/samachar', {useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


    


    
  module.exports = { init }

