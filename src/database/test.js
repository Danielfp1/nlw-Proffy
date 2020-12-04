const dataBase = require('./db.js')
const createProffy = require('./createProffy.js')

dataBase.then(async(db)=>{

    //inserindo dados
    proffyValue = {
         name:'Diego Fernandes',
         avatar:'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4',
         whatsapp:986026910,
         bio:'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
    }

    classValue = {
        subject:1,
        cost:'20',
        // o proffy id vira pelo banco de dados
    }

    classScheduleValues = [
        // o class_id id vira pelo banco de dados, após cadastrasmos a class
        {
            weekday:1,
            time_from:240,
            time_to:1200
        },
        {
            weekday:0,
            time_from:520,
            time_to:1200
        }
    ]

// await createProffy(db, {proffyValue, classValue, classScheduleValues})

// Consultando os dados inseridos 

//todos os proffys
const selectedProffys = await db.all("SELECT * FROM proffys")
// console.log(selectedProffys)

//consulta as classes de um determinado professor
//e traz junto os dados do professor
const selectedClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
`)
// console.log(selectedProffys)

//
//
//
const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id ="1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300"
`)
console.log(selectClassesSchedules)

})