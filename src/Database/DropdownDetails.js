const mongoose=require("mongoose")
const DropDownSchema=mongoose.Schema({
    catagory:{
        type:String
    },
    data:{
        type:String
    }
 })

 const DropDownModel=mongoose.model("Dropdown",DropDownSchema)
 module.exports=DropDownModel