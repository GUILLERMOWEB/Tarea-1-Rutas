const { Shoe } = require("../models/zapatillas")
const { validationResult } = require("express-validator")


const index = (req, res) => {
    res.status(200).send('Hello world!')
}

const list = (req, res) => {

    res.status(200).json({
        producto1: req.query.producto1,
        producto2: req.query.producto2,
        producto3: req.query.producto3,
        producto4: req.query.producto4,
        producto5: req.query.producto5,
    })
}

const sumar = (req, res) => {
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
}

const division = (req, res) => {
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
}

const parImpar = (req, res) => {

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
}


const vistaUnicaZapatos = async (req, res) => {

    const item = await Shoe.findById(req.params.id)
    res.status(200).json({ item })
}

const crearZapatilla = async (req, res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            const item = new Shoe(req.body)
            await item.save()
            res.status(201).json({ item })
        } else {
            res.status(501).json({ err })
        }

    } catch (error) {
        res.status(501).json({ error })
    }
}

const edtarZapatilla = async (req, res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            await Shoe.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({ msg: "Se actualizó el producto" })
        } else {
            res.status(501).json({ err })
        }


    } catch (error) {
        res.status(501).json({ error })
    }
}

const eliminarZapatilla = async (req, res) => {
    const item = await Shoe.findByIdAndDelete(req.params.id)
    res.status(201).json({ msg: "El Siguiente producto fue eliminado: ", item })

}


const verZapatilla = async (req, res) => {

    const items = await Shoe.find()
    res.status(200).json({ items })
}

const ejemploPost = (req, res) => {
    res.status(201).send({
        msg: 'Hola Querido',
    })
}

const ejemploBody = (req, res) => {
    res.status(200).json({
        name: req.body.name,
    })
    res.status(201).json({ msg: "Susscces" })
}


const users = (req, res) => {

    res.status(200).send({

        //Las query, la usamos cuando no sabemos que queremos y se coloca el ? despues de URN /persona?,
        //donde se le agrega una clave y un valor ? {nombre=Guille} y "&" para seguir agtegando [clave = valor]
        //res.send (responde enviado la respuesta ('Hello World!')) Send es para contenidos estáticos

        msg: 'Hola Querido',
        nombre: req.query.nombre,
        apellido: req.query.apellido

    })

}




module.exports = { index, list, sumar, division, parImpar, ejemploPost, ejemploBody, crearZapatilla, vistaUnicaZapatos, verZapatilla, edtarZapatilla, eliminarZapatilla, users }