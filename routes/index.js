

const express = require("express")
const router = express.Router()

const { index, ejemploPost, ejemploBody, crearZapatilla, list, sumar, division, parImpar, vistaUnicaZapatos, verZapatilla, edtarZapatilla, eliminarZapatilla, users } = require("../controllers/indexController")
const { validarId } = require("../middlewares/validarId")
const { check } = require("express-validator")


// Metod GET
router.get('/', index)
router.get('/lista', list)
router.get('/sumar/:num1/:num2', sumar)
router.get('/dividir/:num1/:num2', division)
router.get('/numero', parImpar)
router.get('/body', ejemploBody)
router.get('/ver', verZapatilla)
router.get('/ver/:id', validarId, vistaUnicaZapatos)
router.get('/usuario', users)


//Metodo POST

router.post('/nuevo', ejemploPost)
router.post('/crear', [
    check("modelo").not().isEmpty().withMessage("El campo modelo es requerido").isLength({ min: 2, max: 10 }).withMessage("El campo debe tener mas de 2 letras y menos de 10"),
    check("marca").not().isEmpty().withMessage("El campo marca es requerido"),
    check("talle").not().isEmpty().withMessage("El campo talle es requerido"),
    check("color").not().isEmpty().withMessage("El campo color es requerido"),
    check("garantia").not().isEmpty().withMessage("El campo garantia es requerido"),
    check("deporte").not().isEmpty().withMessage("El campo deporte es requerido"),
], crearZapatilla)

// Metodo PUT

router.put('/editar/:id', validarId, [
    check("modelo").not().isEmpty().withMessage("El campo modelo es requerido").isLength({ min: 2, max: 10 }).withMessage("El campo debe tener mas de 2 letras y menos de 10"),
    check("marca").not().isEmpty().withMessage("El campo marca es requerido"),
    check("talle").not().isEmpty().withMessage("El campo talle es requerido"),
    check("color").not().isEmpty().withMessage("El campo color es requerido"),
    check("garantia").not().isEmpty().withMessage("El campo garantia es requerido"),
    check("deporte").not().isEmpty().withMessage("El campo deporte es requerido"),
], edtarZapatilla)

//Metodo DELETE

router.delete('/eliminar/:id', validarId, eliminarZapatilla)


module.exports = router  
