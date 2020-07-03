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
        // ProductService.searchProduct(req, resp) ,function(err, results) {
        //      console.log("sf"+JSON.stringify(results));
        //      return  resp.status(200).json({ status: 200,result:results , message: "Products Successfully" });
        // }
    //     ProductService.searchProduct(req, resp) .then((res) =>{
    //         return resp.status(200).json({ status: 200,result:res , message: "Products Successfully" });
    //    }).catch((err) =>{
    //      console.log('found error'+err);
    // })
    console.log(ProductService.searchProduct(req, resp));
        }

        suggestProducts=function suggestProducts(req,resp){
        console.log(ProductService.suggestProducts(req, resp));
            }
    
module.exports = { saveProduct,getProducts ,searchProduct,suggestProducts}
