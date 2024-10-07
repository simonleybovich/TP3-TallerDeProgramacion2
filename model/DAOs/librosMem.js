class ModelMem {
    constructor() {
        this.libros = [
            { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: 1967 },
            { id: 2, titulo: "1984", autor: "George Orwell", anio: 1949 },
            { id: 3, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", anio: 1943 },
            { id: 4, titulo: "Matar a un ruiseñor", autor: "Harper Lee", anio: 1960 },
            { id: 5, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: 1605 },
        ]
    }

    obtenerLibros = async () => this.libros

    obtenerLibro = async id => {
        const libro = this.libros.find(l => l.id === Number(id))
        return libro || {}
    }

    guardarLibro = async libro => {
        libro.id = (this.libros[this.libros.length - 1]?.id || 0) + 1

        this.libros.push(libro)
        return libro
    }

    actualizarLibro = async (id, libro) => {
        libro.id = Number(id)

        const index = this.libros.findIndex(l => l.id === Number(id))
        if(index != -1) {
            const libroAnterior = this.libros[index]
            const libroActual = { ...libroAnterior, ...libro } // Spread Operator + Object Merge
            this.libros.splice(index, 1, libroActual)

            return libroActual
        }
        else {
            return {}
        }
    }

    borrarLibro = async id => {
        const libro = this.libros.find(l => l.id === Number(id)) // Encuentra el libro antes de filtrar

        if (libro) {
            this.libros = this.libros.filter(l => l.id !== Number(id)) // Filtra el libro del array
            return libro
        } else {
            return { error: "Libro no encontrado" }
        }
    }
}

export default ModelMem