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


module.exports={getUserData}
