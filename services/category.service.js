var Category = require('../models/category.model')

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
    return category.save()
    .then(result => {
        return result;
    })
    .catch(err => {
        return  err;
    });
    
}
const catName=function catName(req){

    return Category.find({  name: req.query.name  },{
        _id: 1
      })
    .then((res) =>{

       return res;
 }).catch((err) =>{
   return err;
})

    
}
module.exports = { saveCategory,getCategories,catName }
