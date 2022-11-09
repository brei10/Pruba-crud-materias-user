
const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config');

class Server {
    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/user';
        this.materiasPath = "/materia"
        this.semestrePath = '/semestre'
        // conectar a base de datos
        this.conectarDb();
        // middlewars
        this.middlewars();
        // rutas de mi aplicacion
        this.routes();
    }

    async conectarDb() {
        await dbConection()
    }

    middlewars() {
        // cors 
        this.app.use(cors())

        //parseo ylectura del body
        this.app.use(express.json());
        // directorio publico 
        this.app.use(express.static('public'))
    }
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuario'))
        this.app.use(this.materiasPath, require("../routes/materia"))
        this.app.use(this.semestrePath, require("../routes/semestre"))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor creado en el puerto ${process.env.PORT}; `)
        })
    }
}

module.exports = Server;