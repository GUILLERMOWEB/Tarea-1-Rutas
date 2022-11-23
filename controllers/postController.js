/*
const { Shoe } = require("../models/zapatillas")

const crearZapatilla = async (req, res) => {
    try {
        const item = new Shoe(req.body)
        await item.save()
        res.status(201).json({ item })
    } catch (error) {
        res.status(501).json({ error })
    }
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

module.exports = { ejemploPost, ejemploBody, crearZapatilla, verZapatilla }
*/