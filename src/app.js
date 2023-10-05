const express= require("express")
const app = express()
const allRoutes=require("./Routes/route")
require("./Database/connection")

const PORT = process.env.PORT || 3001


app.use("/api",allRoutes)
app.listen(PORT,()=>{
    console.log("RUNNING AT PORT ",`${PORT}`)
})

app.get("/",(req,res)=>{res.send("working")})



