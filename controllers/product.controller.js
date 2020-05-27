var ProductService = require('../services/product.service')    
 
getProducts=function getProducts(req, resp){
    ProductService.getProducts(req, resp)
    .then((res) =>{
        return resp.status(200).json({ status: 200,result:res , message: "Retrieved Products Successfully" });
   }).catch((err) =>{
     console.log('found error'+err);
})

}

saveProduct=function saveProduct(req,resp){
    ProductService.saveProduct(req, resp) .then((res) =>{
        return resp.status(200).json({ status: 200,result:res , message: "Saved Product Successfully" });
   }).catch((err) =>{
     console.log('found error'+err);
})
   
    }
    searchProduct=function searchProduct(req,resp){
        ProductService.searchProduct(req,resp).then((res) =>{
            return resp.status(200).json({ status: 200,result:res , message: "Retrieved Products Successfully" });
       }).catch((err) =>{
         console.log('found error'+err);
    })
        
       
        }
module.exports = { saveProduct,getProducts,searchProduct }
