const express = require('express')// Guardo express en la constante
const app = express()//Asigno express como una función para darle metodos y recursos a app
const port = 3001 // Le damos un puerto


//Punto 1
app.get('/persona', (req, res) => {
  res.send({

    //Las query, la usamos cuando no sabemos que queremos y se coloca el ? despues de URN /persona?,
    //donde se le agrega una clave y un valor ? {nombre=Guille} y "&" para seguir agtegando [clave = valor]
    //res.send (responde enviado la respuesta ('Hello World!')) Send es para contenidos estáticos

    msg: 'Hola',
    nombre: req.query.nombre,
    apellido: req.query.apellido

  })
})


// Punto 2
app.get('/dividir/:num1/:num2', (req, res) => {
  let dividendo = Number(req.params.num1)
  let divisor = Number(req.params.num2)
  if (divisor == 0) {
    res.json({
      msg: "Error, no se puede dividir por 0"

    })
  } else {

    res.json(

      (dividendo / divisor)
    )
  }
})

//Punto 3 
app.get('/sumar/:num1/:num2', (req, res) => {
  let numero1 = Number(req.params.num1)
  let numero2 = Number(req.params.num2)
  if (numero1 + numero2 < 0) {
    res.json({
      msg: "Error, no se puede enviar resultados números menores que Cero(0)"

    })
  } else {

    res.json(

      (numero1 + numero2)
    )
  }
})

//Punto 4

// http://localhost:3001/numero?num=
app.get('/numero', (req, res) => {
  let num = Number(req.query.num)
  if (num % 2 == 0) {
    res.send(

      "Autorizado"


    )
  } else {
    res.send(

      "No Autorizado"

    )

  }
})

//Punto 5

app.get('/lista-de-compras',(req,res) => {
  res.json({
      producto1: req.query.producto1,
      producto2: req.query.producto2,
      producto3: req.query.producto3,
      producto4: req.query.producto4,
      producto5: req.query.producto5,
  })
})



//Esta seria la URL http://localhost:3001/  
//listen (levanta el servidor)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

  //entre la URL y la URN, forman la direccion http