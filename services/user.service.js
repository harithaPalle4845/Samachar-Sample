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
        user.on('es-indexed', function(err) {
            if (err) throw err;

            console.log('user indexed');
            return result;
          });

    })
    .catch(err => {
        return  err;
    });
   
    
}
const searchUser =  function searchUser(req,resp) {
    console.log("sf"+req.query.name)

    return  User.search({query_string: {query: req.query.name}}, function(err, results) {
         console.log("sf"+JSON.stringify(results));
         resp.json(results);
   });

}
module.exports = { saveUser,getUsers,searchUser }
