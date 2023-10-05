
const ProductDetailModel = require("../Database/Productdetails")

const addproduct=  async (req,res)=>{
    const ProductDetail=ProductDetailModel({
        name:req.body.name,
        type:req.body.type,
        heading:req.body.heading,
        colourways:req.body.colourways,
        price:req.body.price,
        logo:req.body.logo,
        pic:req.body.pic,
   })

   await ProductDetail.save().then((result)=>{
       res.send(result)
   }).catch((error)=>{
       console.log("error",error)
   })
}

const viewproduct=(req,res)=>{
    ProductDetailModel.find().then((result)=>{
        
        res.send(result)
    }).catch((error)=>{
        console.log("error",error)
    })
} 




module.exports={addproduct,viewproduct}