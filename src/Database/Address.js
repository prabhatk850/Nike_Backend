const mongoose=require("mongoose")
const {ObjectId} = mongoose.Schema.Types

const AddressSchema=mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
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
    userid:{
        type:ObjectId,
        ref:'AuthDetail'
    },
    default:{
        type:Boolean,
        default:false
    }

})
const AddressModel= mongoose.model("Address",AddressSchema)
module.exports=AddressModel