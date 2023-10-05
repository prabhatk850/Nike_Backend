const mongoose= require("mongoose")
const sidebardetail=mongoose.Schema({

    
    content:{
        type:String
    },
    catagory:{
        type:String
    }    
})
const sidebardetailmodel=mongoose.model("sidebardetail",sidebardetail)
module.exports=sidebardetailmodel