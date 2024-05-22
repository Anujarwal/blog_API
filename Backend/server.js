const express = require("express");
const colors = require("colors")
const connectDB = require("./Config/db_Config");
require("dotenv").config()

const app = express()

const PORT = process.env.PORT || 8080;

connectDB();


app.use(express.json())
app.use(express.urlencoded({extended :true}))

// Root Directory
app.get("/" , (req,res) => {
    res.send({message : "Hello World"})
})


app.use("/api/blog" , require("./Routes/BlogRoutes"))


app.listen(PORT , () => {
    console.log(`server is runnning on port ${PORT}`.white.bgCyan)
})