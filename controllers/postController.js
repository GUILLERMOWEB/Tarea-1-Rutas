

const ejemploPost =(req, res) => {

    res.status(201).send({
   
     
         msg: 'Hola Querido',
       
       })
 
   }

const ejemploBody =(req, res) =>{
    res.status(200).json({
        name: req.body.name,
        status: "Success",

    })
}
   
 module.exports = {ejemploPost, ejemploBody}