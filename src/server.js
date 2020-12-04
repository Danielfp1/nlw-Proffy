 const proffys = [
     {
         name:'Diego Fernandes',
         avatar:'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4',
         whatsapp:986026910,
         bio:'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
         subject:'Quimica',
         cost:'20',
         weekday:[0],
         time_from:[240],
         time_to:[1200]
        },
        {
        name:'Diego Fernandes2',
        avatar:'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4',
        whatsapp:654321,
        bio:'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
        subject:'Quimica',
        cost:'40',
        weekday:[3],
        time_from:[240],
        time_to:[1200]
        },
 ]

 const subjects = ["Artes","Biologia","Ciências","Educação física","Física","Geografia","História","Matemática","Português","Química"]
 const weekdays = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]
function pageLanding(req,res){
    return res.render('index.html')
}

function getSubject(subjectNumber){
    const position=  +subjectNumber-1
    return subjects[position]
}


function pageStudy(req,res){
    const filters=req.query
    return res.render('study.html',{proffys, filters, subjects, weekdays}) 
}
function pageGiveClasses(req,res){
    //adicionado dados
    const data = req.query
    console.log(data)


    const dataIsNotEmpty = Object.keys(data).length != 0;
    if(dataIsNotEmpty){

        data.subject=getSubject(data.subject);

        proffys.push(data)

        return res.redirect("/study")
    } 

    return res.render('give-classes.html',{subjects, weekdays})
}


 
 
 const express = require('express')
 const server = express()

 //configuracao do nunjucks
 const nunjucks = require('nunjucks')
 nunjucks.configure('src/views',{
     express: server,
     noCache: true,
 })

//configuracao de arquivos estaticos
server.use(express.static("public"))

//Rotas
 .get("/",pageLanding)
 .get("/study",pageStudy)
 .get("/give-classes",pageGiveClasses)
 //Start
 .listen(5500)
