const mongoose=require("mongoose")
const ProductDetail=mongoose.Schema({
  name:{
    type:String
  },
  type:{
    type:String
  } ,
  heading:{
    type:String
  } ,
  colourways:{
    type:Number
  } ,
  price:{
    type:Number
  } ,
  pic:{
    type:String
  },
  logo:{
    type:String
  } 
})

const ProductDetailModel= mongoose.model("ProductDetail",ProductDetail)
module.exports=ProductDetailModel