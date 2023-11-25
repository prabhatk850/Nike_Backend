const mongoose=require("mongoose")
const {ObjectId} = mongoose.Schema.Types
const Favoritedetail=mongoose.Schema({
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
  },
  userid:{
    type:ObjectId,
    ref:'AuthDetail'
},
})

const FavoritedetailModel= mongoose.model("Favorite",Favoritedetail)
module.exports=FavoritedetailModel