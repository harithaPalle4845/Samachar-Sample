var Category = require('../models/category.model')
var Product = require('../models/product.model')


    const getCategories= function getCategories(req, res){
        return Category.find()
         .then((res) =>{
            return res;
      }).catch((err) =>{
        return err;
    })
    }
const saveCategory=  function saveCategory(req,resp) {
    var category = new Category(req.body)
    return category.save().then((res) =>{
        return res;
  }).catch((err) =>{
    return err;
})
    
}
const searchCategory =  function searchCategory(req,resp) {
    console.log("name"+req.query.name)

    //   return  Category.search({query_string: {query: req.query.name}}, function(err, results) {
    //        console.log("sf"+JSON.stringify(results));
    //        console.log("sf"+JSON.stringify(err));

    //        resp.json(results);
    // });
  return  Category.search({has_child :
       {type : "product",query : {match: {"product.name":req.query.name }}}}, function(err, results) {
               console.log("sf"+JSON.stringify(results));
               console.log("sf"+JSON.stringify(err));
                resp.json(results);
          });

        

}

module.exports = { saveCategory,getCategories ,searchCategory}
