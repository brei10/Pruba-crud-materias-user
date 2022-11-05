const Usuario = require("../models/usuario")

const login = async (req, res) => {
    const { correo } = req.body;
    try {
        // verificar si el email existe
        const usuario = await Usuario.findOne({ correo })
        if (!usuario) {
            return res.status(400).json({
                msg: "email incorrecto"
            })
        }

        res.json({
            usuario
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: "hable con el admin"
        })

    }

}



module.exports = {
    login
}