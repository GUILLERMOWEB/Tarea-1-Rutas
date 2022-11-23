
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const shoesSchema = new Schema({

    modelo: {
        type: String,
        required: true

    },
    marca: {
        type: String,
        required: true

    },
    talle:{
        type: Number,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    garantia:{
        type: Boolean,
        required: true
    },
    deporte:{
        type: String,
        required: true  
    }
})

const Shoe = mongoose.model('Shoe', shoesSchema)
module.exports = {Shoe}