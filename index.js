import express from "express";
const app = express()

//utilizar o ejs como view engine
app.set("view engine", "ejs")

app.get("/",(req,res) =>{
    var nome = "Alvaro Alves"
    var lang = "Javascript"
    //Não precisa colocar o caminho inteiro, ele ja busca direto na pasta views
    res.render("index",{
        nome: nome,
        lang: lang
    })
})

app.listen(8080, console.log("app rodando"))
