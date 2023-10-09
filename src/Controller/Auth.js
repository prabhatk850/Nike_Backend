const SignUpDetailModel = require("../Database/AuthDetail")
const jwt = require("jsonwebtoken");
require("dotenv").config();

tokenGenrate = async (_id) => {
    const token = await jwt.sign({ _id }, process.env.JWTSECRETKEY, {
      expiresIn: "24h",
    });
    return token;
  };

const SignUp = async (req,res)=>{
    const SignUpDetails=SignUpDetailModel({
        email:req.body.email,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        password:req.body.password,
        preference:req.body.preference,
        dob:req.body.dob
    })

    let alreadyUserCheck = await SignUpDetailModel.findOne({
        email: req.body.email,
      });
        if(alreadyUserCheck){
            res.status(409).send("user already exist")
        }
        else{
            SignUpDetails.save().then((result)=>{
                res.status(201).send("User Created Successfully")
            }).catch((error)=>{
                console.log("error",error)
            })        
        }
}
const userExist= async(req,res)=>{
    if(!req.body.email){
        res.status(400).send("This field can't be empty")
      }else{
        let emailcheck = await SignUpDetailModel.findOne({
            email: req.body.email
          });
          if(!emailcheck){
            res.send(false)
          }
          else{
            res.send(true)
          }
 }
}

const SignIn= async (req,res)=>{
      if(!req.body.email){
        res.status(400).send("This field can't be empty")
      }else{
        let emailcheck = await SignUpDetailModel.findOne({
            email: req.body.email
          });
          if(!emailcheck){
            res.status(404).send("User not found").then((result)=>{
                console.log("result",result)
            }).catch((err)=>{
                console.log("err",err)
            })
          }
         if(emailcheck && req.body.password == emailcheck.password){
                token = await tokenGenrate(emailcheck._id).then((result)=>{
                    res.send(result)
                })
                .catch((err)=>{
                    console.log("err",err)
                })

                // res.send("Login Successful").then((result)=>{
                //     console.log("error",result)
                // }).catch((err)=>{
                //     console.log("err",err)
                // })
            }
            else{
                res.send("Invalid password")
            }
    
}
}



module.exports={SignUp,SignIn,userExist}