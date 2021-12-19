var mongoose = require("mongoose");
var schema = mongoose.Schema;
const userSchema = new schema({
    username:{
        type:String,
        min:2,
        max:20,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6
    },
},
{timestamps:true}
)
module.exports = mongoose.model("User",userSchema,"users");