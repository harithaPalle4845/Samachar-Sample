var Product = require('../models/product.model')
var CategoryService = require('../services/category.service')    


    const getProducts= function getProducts(req, res){
        return Product.find()
         .then((res) =>{
            return res;
      }).catch((err) =>{
        return err;
    })
    }
const saveProduct=  function saveProduct(req,resp) {
    var product = new Product(req.body)
    return product.save()
    .then(result => {
        return result;
    })
    .catch(err => {
        return  err;
    });
    
}
const searchProduct=function searchproduct(req,resp){
    const oco = Object.create( {} ); 
   return CategoryService.catName(req)
    .then((res) =>{
        oco.name=req.query.name;
        if(res.length!==0){
            oco.catId=res[0]._id;
            return searchPr(oco);

        }
        else {
             return Product.find({ name:req.query.name },{
             category: 1}).then((res) =>{
               oco.catId=res[0].category;

               return searchPr(oco);

            }).catch((err) =>{
             err;
         })


        }


  }).catch((err) =>{
    return err;
  })    
}

function searchPr(oco){

    return Product.find({ $or: [{ name: oco.name }, { category: oco.catId }] })
    .then((res) =>{
       return res;
 }).catch((err) =>{
   return err;
})
}
 

module.exports = { saveProduct,getProducts,searchProduct }
