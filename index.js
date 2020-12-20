import express from "express";
const app = express()

//utilizar o ejs como view engine
app.set("view engine", "ejs")

app.get("/",(req,res) =>{
    res.send("Hello World!")
})

app.listen(8080, console.log("app rodando"))
