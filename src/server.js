 const express = require('express')
 const server = express()
 const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
 } = require('./pages.js')

 //configuracao do nunjucks
 const nunjucks = require('nunjucks')
 nunjucks.configure('src/views',{
     express: server,
     noCache: true,
 })








//iniciando a configuração do servidor
server
// recebe os dados do req.body
.use(express.urlencoded({extended: true}))
//configuracao de arquivos estaticos
.use(express.static("public"))

//Rotas
 .get("/",pageLanding)
 .get("/study",pageStudy)
 .get("/give-classes",pageGiveClasses)
 .post("/save-classes",saveClasses)
 //Start
 .listen(5500)
