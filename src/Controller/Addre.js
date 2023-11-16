const AddressModel= require("../Database/Address");


const updateAddress = async(req,res)=>{
  const Address = AddressModel({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    dob:req.body.dob,
    email:req.body.email,
    phoneNumber:req.body.phoneNumber,
    addressline1:req.body.addressline1,
    addressline2:req.body.addressline2,
    city:req.body.city,
    town:req.body.town,
    state:req.body.state,
    postalcode:req.body.postalcode,
    country:req.body.country,
    userid:req.user._id
  })
  await Address.save().then((result)=>{
  res.send(result)
}).catch((err)=>{
  res.send(err)
})
}





module.exports={updateAddress}
