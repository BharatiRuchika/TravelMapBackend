const pins = require("../models/pins");
// var pins = require("../models/pins");
exports.savePin = async(req,res)=>{
   const newPin = new pins(req.body);
   try{
       const savedPin = await newPin.save();
        res.send(savedPin);
   }catch(err){
       res.send(err);
   }
}
exports.getPins = async(req,res)=>{
    try{
      var pin = await pins.find({});
      res.send(pin);
    }catch(err){
        console.log(err);
        res.send(pins);
    }
}