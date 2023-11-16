const mongoose=require("mongoose")
const AuthDetailSchema=mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    password:{
        type:String
    },
    preference:{
        type:String
    },
    dob:{
        type:String
    },
    email:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    postalcode:{
        type:String
    },
    country:{
        type:String
    },
    interest:[{
        type:String
    }], 
    createdAt:{
        type:Date,
        default:Date.now()
    },


})
const AuthDetailModel= mongoose.model("Users",AuthDetailSchema)
module.exports=AuthDetailModel