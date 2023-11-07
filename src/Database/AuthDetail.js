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
    addressline1:{
        type:String
    },
    addressline2:{
        type:String
    },
    city:{
        type:String
    },
    town:{
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

})
const AuthDetailModel= mongoose.model("Users",AuthDetailSchema)
module.exports=AuthDetailModel