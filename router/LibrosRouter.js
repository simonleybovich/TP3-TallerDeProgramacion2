import express from 'express'
import Controlador from '../controlador/LibrosController.js'

class Router {
    constructor() {
        this.controlador = new Controlador()
    }

    start() {
        const router = express.Router()

        router.get('/:id?', this.controlador.obtenerLibros)
        router.post('/', this.controlador.guardarLibro)
        router.put('/:id', this.controlador.actualizarLibro)
        router.delete('/:id', this.controlador.borrarLibro)

        return router
    }
}

export default Router