var ProductModel = require('../models/product.model')
var mongoose     = require('mongoose');
var ObjectId     = mongoose.Types.ObjectId;

    const getProducts= function getProducts(req, res){
        return Product.find()
         .then((res) =>{
            return res;
      }).catch((err) =>{
        return err;
    })
    }
const saveProduct=  function saveProduct(req,resp) {
    console.log('name'+req.body.name);

                var product = new ProductModel({
                  name:req.body.name,
                  category: new ObjectId(req.body.category)
                });
              
            return product.save()
            .then(result => {
                product.on('es-indexed', function(err) {
                    if (err) throw err;
                    console.log('product indexed');
                    return result;
                  });
            })
            .catch(err => {
                return  err;
            });
    
}

const searchProduct =  function searchProduct(req,resp) {
    var q={query_string:{query:req.query.name}};

    //var q1={query:{filtered:{query:{
      //       query_string:{query:req.query.name,minimum_should_match:3 }}}}};
    //var q={query_string:{query:{name:req.query.name}}};
    console.log("sf"+req.query.name)
   // var q={query_string:{query:req.query.name,minimum_should_match: 3,fuzziness: 2}};
//    var q= {query: {match: {name: {query: req.query.name,minimum_should_match: 3,fuzziness: 2 }}}};

// let b={body: {
//     query: { bool:{
//         must:[
//     {query_string: { 
//         query:req.query.name,
//         fields: ['name','category.name'],
//      }}]
//     }
//   }}}
let b={body: {
        query: { bool:{
             must:[
         {query_string: { 
             query:req.query.name,
             fields: ['name','category.name'],
             type : "phrase_prefix",
             fuzziness:2

          }}]
         }
       }}}
     ProductModel.search('product',b, function(err, results) {
         console.log("d"+err);
        console.log("d"+JSON.stringify(results));
  
         resp.json(results.hits.hits);
       });
//var q={query:{query_string:{name:req.query.name}}};
//var q={"query" : {"bool" : {"filter": [ {"term" :  {"fields.name" : req.query.name }}]}}};
//var q={query : {filtered :{ query: {match_all: {} }}}};

// return ProductModel.search(q)
// .then((res) =>{
//    return res;
// }).catch((err) =>{
// return err;
// })
            
}


const suggestProducts =  function suggestProducts(req,resp) {

let b={body: {
  "suggest": {
    "text" : req.query.name,
    "name-suggester" : {
      "term" : {
        "field" : "name"
      }
    }
    
  }
}
  }
  //  ProductModel.search('product', b)
  //  .then(results => {
  //    console.log(`suggestions for each term are:`);
  //    results.nameSuggester.forEach((term, index) => {
  //      console.log(`term ${++index}: ${term.text}`);
  //      term.options.forEach((option, index) => console.log(`\t suggestion ${++index}: ${option.text}`));
  //    });
  //  })
  //  .catch(console.error);
  ProductModel.search('product',b, function(err, results) {
    console.log("d"+err);
   console.log("d"+JSON.stringify(results));

    resp.json(results);
  });
    }

module.exports = { saveProduct,getProducts,searchProduct ,suggestProducts}
