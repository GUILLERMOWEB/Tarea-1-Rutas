const express = require('express')// Guardo express en la constante
const app = express()//Asigno express como una función para darle metodos y recursos a app
const logger= require("morgan")

const usersRouter = require("./routes/users")
const sumarRouter = require("./routes/maths")
const divisionRouter = require("./routes/maths")
const parImparRouter  = require("./routes/maths")
const listRouter = require("./routes/list")
const ejemploPostRouter  = require("./routes/post")
const ejemploBody = require('./routes/post')

//Configuración
app.use(logger("dev"))
app.use(express.json())



//Punto 1 
// Ejemplo http://localhost:3000/usuario
app.use('/', usersRouter )


// Punto 2 

// Ejemplo http://localhost:3000/dividir/45/9
app.get('/', divisionRouter)
 
// Ejemplo http://localhost:3000/sumar/8/10
app.use('/', sumarRouter )


// Ejemplo http://localhost:3000/numero?num=8
app.get('/', parImparRouter) 
  

app.get('/lista',listRouter)

app.post('/crear', ejemploPostRouter)

app.get('/body', ejemploBody)


module.exports = app
