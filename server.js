import express from 'express'
import RouterLibros from './router/LibrosRouter.js'

import config from './config.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// ----------------------------------
//     ApiRestful: Libros
// ----------------------------------
app.use('/api/libros', new RouterLibros().start())

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor ApiRestful escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
