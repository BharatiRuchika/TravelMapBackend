var users = require("../models/users");
var bcrypt = require("bcrypt");
exports.Register = async(req,res)=>{
  try{
     const salt = await bcrypt.genSalt(10);
     console.log("salt",salt);
     const hashPassword = await bcrypt.hash(req.body.password,salt);
    
     const user = new users({
         username:req.body.username,
         email:req.body.email,
         password:hashPassword
     })
    try{
     var response = await user.save();
     res.send(response);
    }catch(err){
        console.log(err);
    }
  }catch(err){
      console.log(err);
  }
}
exports.Login = async(req,res)=>{
    try{
      var user = await users.find({username:req.body.username})
      if(user.length==0){
          console.log("im here");
          res.send({msg:"user doesnt exist"})
      }
      console.log("user",user.length);
      console.log("password",user[0].password);
    var validatePassword = await bcrypt.compare(req.body.password,user[0].password)
    if(!validatePassword){
        res.send({msg:"password is incorrect"})
    }
    res.send({user});
    }catch(err){
        console.log(err);
    }
}