

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

/*
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

module.exports = { sumar, division, parImpar }
*/