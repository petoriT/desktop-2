
module.exports = function verify(data, Model, res, emailToken) {

  Model.findOne({ email : data.email }).then(user => {

    //Check if user is verified
    if(user.verified.token == emailToken){
      if(user.verified.isVerified){
        res.json({msg: user.email + " is already verified" })
      }else{
        // Set verified to true
        user.verified.isVerified = true;
        user.save().then(user => {
          res.json({msg: user.email + " is succesfully verified"})
        })
      }
    }else{
      res.json({msg: "Your link is old and expired!!"})
    }

  }).catch(err => console.log(err));

}
