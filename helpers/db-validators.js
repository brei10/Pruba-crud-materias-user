
const Usuario = require("../models/usuario")


const emailExiste = async (email = "") => {
    //verificar si el correo existe
    const existeEmail = await Usuario.findOne({ email: email })
    if (existeEmail) {
        throw new Error(`el correo: ${email} se encuentra ya registrado`)
    }
}




module.exports = {
    emailExiste,
}