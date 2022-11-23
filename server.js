//Esta seria la URL http://localhost:3000/  
//listen (levanta el servidor)



const app = require("./app")

require("dotenv").config()


const port =  process.env.PORT || 3000 // Le damos un puerto

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
    //entre la URL y la URN, forman la direccion http