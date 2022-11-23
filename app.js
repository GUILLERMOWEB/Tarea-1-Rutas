const express = require('express')// Guardo express en la constante
const app = express()//Asigno express como una función para darle metodos y recursos a app
const logger= require("morgan")
const cors = require ("cors")

/*
const {indexRouter,usersRouter,divisionRouter,parImparRouter,listRouter,ejemploPostRouter,ejemploBody,crearZapatillaRouter,verZapatillaRouter}=require("./routes/index")
*/
const indexRouter = require('./routes/index')
/*
const usersRouter = require("./routes/index")
const sumarRouter = require("./routes/index")
const divisionRouter = require("./routes/index")
const parImparRouter  = require("./routes/index")
const listRouter = require("./routes/index")
const ejemploPostRouter  = require("./routes/index")
const ejemploBody = require('./routes/index')
const crearZapatillaRouter  = require("./routes/index")
const verZapatillaRouter= require("./routes/index")
const vistaUnicaZapatosRouter= require("./routes/index")
7*/

const {conect}=require("./db/db")

//Configuración
app.use(logger("dev"))
app.use(express.json())
app.use(cors())

app.use('/api', indexRouter ) //API de usuario
conect()
/*
// Ejemplo http://localhost:3000/usuario
app.use('/usuario', usersRouter ) 
conect()

// Punto 2 

// Ejemplo http://localhost:3000/dividir/45/9
app.get('/dividir   ', divisionRouter)
 
// Ejemplo http://localhost:3000/sumar/8/10
app.use('/sumar', sumarRouter )

// Ejemplo http://localhost:3000/numero?num=8
app.get('/numero', parImparRouter) 
  
app.get('/lista',listRouter)

app.post('/crear', ejemploPostRouter)

app.post('/zapatilla',crearZapatillaRouter)

app.get('/ver', verZapatillaRouter )
app.get('/ver/:id', vistaUnicaZapatosRouter)

app.get('/body', ejemploBody)


*/

module.exports = app
