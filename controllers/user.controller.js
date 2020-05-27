var UserService = require('../services/user.service')    
 
getUsers=function getUsers(req, resp){
   UserService.getUsers(req, resp)
    .then((res) =>{
        return resp.status(200).json({ status: 200,result:res , message: "Retrieved Users Successfully" });
   }).catch((err) =>{
     console.log('found error'+err);
})

}

saveUser=function saveUser(req,resp){
     UserService.saveUser(req, resp) .then((res) =>{
        return resp.status(200).json({ status: 200,result:res , message: "Saved User Successfully" });
   }).catch((err) =>{
     console.log('found error'+err);
})
   
    }
module.exports = { saveUser,getUsers }
