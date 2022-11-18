

const mongoose = require("mongoose")

const conect = async()=>{
    try {
        await mongoose.connect("mongodb+srv://Guillermo:2h1emem@cluster0.zccgyxc.mongodb.net/test")
        console.log("Base de datos Conectada")
    } catch {
        console.log("No se pudo conectar a la base de datos")
    }


}

module.exports = {conect}