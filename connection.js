var mongoose = require("mongoose");
exports.connect = ()=>{
    try{
        mongoose.connect("mongodb+srv://guvi:admin123@cluster0.bdpws.mongodb.net/TravelMap?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true})
    }catch(err){
        console.log(err);
        process.exit();
    }
}