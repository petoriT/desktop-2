const bcrypt = require("bcryptjs");
const createToken = require("./payload");

module.exports = function userToken(user, password, res) {
  if (!user) {
    return res.status(404).json({ emailnotfound: "You are not registered!" });
  }
  // Check password
  if (user.admin){
    createToken(user, res)
  }else{
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // Create JWT Payload
        createToken(user, res)
      } else {
        return res.status(400).json({ passwordincorrect: "Password is incorrect" });
      }
    }).catch(err => console.log("bcrypt: ",err));
  }
}
