var CategoryService = require('../services/category.service')    
 
getCategories=function getCategories(req, resp){
    CategoryService.getCategories(req, resp)
    .then((res) =>{
        return resp.status(200).json({ status: 200,result:res , message: "Retrieved Categories Successfully" });
   }).catch((err) =>{
     console.log('found error'+err);
})

}

saveCategory=function saveCategory(req,resp){
    CategoryService.saveCategory(req, resp) .then((res) =>{
        return resp.status(200).json({ status: 200,result:res , message: "Saved Category Successfully" });
   }).catch((err) =>{
     console.log('found error'+err);
})
   
    }
module.exports = { saveCategory,getCategories }
