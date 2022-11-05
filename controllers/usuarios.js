const Usuario = require("../models/usuario")

const usuariosGet = async (req, res) => {

    res.json({
        msg: "probando"

    });
}

const usuariosPut = async (req, res) => {
    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body

    res.json({
        msg: "put api",
        resto
    })
}

const usuariosPost = async (req, res) => {

    // obtenemos la request
    const { nombre, apellido, email, sexo } = req.body;
    const usuario = new Usuario({ nombre, email, apellido, sexo });

    // guardarDB
    await usuario.save()

    res.json({
        // nuestras respuestas...
        msg: "post api",
        usuario
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
}