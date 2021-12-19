var mongoose = require("mongoose");
var schema = mongoose.Schema;
const pinSchema = new schema({
    username:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        min:3,
    },
    desc:{
        type:String,
        required:true,
        min:3
    },
    rating:{
        type:Number,
        required:true,
        min:0,
        max:5
    },
    lat:{
        type:Number,
        required:true
    },
    long:{
        type:Number,
        required:true
    }
},
{timestamps:true}
)
module.exports = mongoose.model("pinSchema",pinSchema,"pins");