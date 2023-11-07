const jwt = require("jsonwebtoken");
const AuthDetailModel = require("../Database/AuthDetail");
require("dotenv").config();

const authTokenCheck = async(req,res,next)=> {
    
    let token = req.headers.token
    TokenArray = token.split(" ")
    jwt.verify(TokenArray[1],process.env.JWTSECRETKEY,(err,payload)=>{
        if(err){
            res.status(401).send(err)
        }
        else{
            requser = async ()=>{
                
                const{_id} =payload
                req.user= await AuthDetailModel.findById(_id)
                next()
                
            }
            requser()
        }
    
    })
 

}
module.exports = {authTokenCheck}