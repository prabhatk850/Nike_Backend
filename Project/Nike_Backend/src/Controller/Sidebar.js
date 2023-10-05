const sidebardetailmodel =require("../Database/Sidebardetails")


const addsidebar = async (req,res)=>{
    const sidebardetail=sidebardetailmodel({
        content:req.body.content,
        catagory:req.body.catagory
    })
    await sidebardetail.save().then((result)=>{
        res.send(result)
    }).catch((error)=>{
        console.log("error",error)
    })
}

const viewSidebar = (req,res)=>{
    sidebardetailmodel.find().then((result)=>{
        res.send(result)
    }).catch((error)=>{
        console.log("error",error)
    })
}


module.exports={addsidebar,viewSidebar}