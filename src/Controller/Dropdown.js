const DropDownModel=require("../Database/DropdownDetails")

const addDropdown= async (req,res)=>{

const DropDown=DropDownModel({
    type:req.body.type,
    category:req.body.category
})

DropDown.save().then((result)=>{
    res.send(result)
}).catch((error)=>{
    console.log("error",error)
})
}

const ViewDropDown= (req,res)=>{
    DropDownModel.find().then((result)=>{
        res.send(result)
    }).catch((error)=>{
        console.log("error",error)
    })
}


module.exports={addDropdown,ViewDropDown}