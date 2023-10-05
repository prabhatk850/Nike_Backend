const mongoose= require('mongoose')
const url="mongodb+srv://prabhatk850:Qwerty123@cluster0.l2inx03.mongodb.net/"

mongoose.connect(url).then(()=>{
    console.log("Connected to database")
}).catch((error)=>{
    console.log("error",error)
})
