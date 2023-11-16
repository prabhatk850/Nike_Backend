const jwt = require('jsonwebtoken');
require("dotenv").config();
const AuthDetailModel = require("../Database/AuthDetail")


// Define your API endpoint
const getUserData = async (req, res) => {
    // Get the token from the request headers
    const token = req.headers.token.split(' ')[1];
  
    try {
      // Verify the token
      const decodedToken = jwt.verify(token, process.env.JWTSECRETKEY);
  
      // Get the user ID from the decoded token
      const userId = decodedToken._id;
  
      // Find the user in the database
      const user = await AuthDetailModel.findById(userId);
  
      // Return the user information
      res.send(user)
    } catch (error) {
      // Return an error if the token is invalid or the user is not found
      res.status(401).json({ message: 'Invalid token' });
    }
};

const updateProfile = async(req,res)=>{
  const Profile ={
    password:req.body.password,
    phoneNumber:req.body.phoneNumber,
  }
  const _id = req.user._id
  AuthDetailModel.findByIdAndUpdate(_id,Profile,{new:true}).then((result)=>{
  res.send(result)
}).catch((err)=>{
  res.send(err)
})
}





module.exports={getUserData,updateProfile}
