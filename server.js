const express = require("express");
const dotenv = require("dotenv");
const mongoose =require("mongoose")

dotenv.config()
const app =express()

console.log(process.env.MONGO_URL)
mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("the server is connected to mongodb")
})
.catch(err=> console.log(err))

const PORT = process.env.PORT 
app.listen(PORT,()=>{
    console.log("the server is running")

})