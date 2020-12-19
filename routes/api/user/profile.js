const router = require("express").Router();

// Authenticate user middleware
const authCheck = require("../../../validation/authenticate/checkMiddleware/jwtCheck")
const User = require("../../../models/users/User");

/***only logged in user can access below api's***/

router.get('/', authCheck, (req, res) => {

  //Logged in with passport strategy
  if(req.googleUser){
    res.json({
      message: "googleUser: You are logged in !",
      user:req.googleUser
    });

  //logged in with token method
  }else if (req.authData){
    User.findOne({email:req.authData.email}).then(user => {

      if(user.storeOwner){
        res.json({
          message: "Admin: You are logged in !",
          user:user
        })

      }else{
        res.json({
          message: "User: You are logged in !",
          user:user
        })
      }

    }).catch(err => err)

  }else{
    res.json({message: 'Fobbiden'});
  }

});

module.exports = router;
