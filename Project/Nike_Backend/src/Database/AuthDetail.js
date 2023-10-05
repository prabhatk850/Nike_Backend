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
    }
})
const AuthDetailModel= mongoose.model("Users",AuthDetailSchema)
module.exports=AuthDetailModel