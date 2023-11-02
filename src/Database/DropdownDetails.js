const mongoose=require("mongoose")
const DropDownSchema=mongoose.Schema({
    category:{
        type:String
    },
    type:[{
        type:String
    }]
        
    
    

 })

 const DropDownModel=mongoose.model("Dropdown",DropDownSchema)
 module.exports=DropDownModel