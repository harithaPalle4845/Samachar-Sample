var User = require('../models/user.model')

    const getUsers= function getUsers(req, res){
        return User.find()
         .then((res) =>{
            return res;
      }).catch((err) =>{
        return err;
    })
    }
const saveUser =  function saveUser(req,resp) {
    var user = new User(req.body)
    return user.save()
    .then(result => {
        return result;
    })
    .catch(err => {
        return  err;
    });
    
}
module.exports = { saveUser,getUsers }
