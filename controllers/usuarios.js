const Usuario = require("../models/usuario");

const usuariosGet = async (req, res) => {

    const [total, usuariosObtenidos] = await Promise.all([
        Usuario.count(),
        Usuario.find()
            .populate("materias")
    ]);

    res.json({
        total,
        usuariosObtenidos

    });

}

const usuariosPut = async (req, res) => {
    const { id } = req.params;
    const { _id, ...all } = req.body
    try {
        if (all.sexo != "masculino" && all.sexo != "femenino" ) {
            return res.json({
                msg: `el genero ${all.sexo} no es un genero valido`
            })
        }
            const usuario = await Usuario.findByIdAndUpdate(id,all,{new:true})
                 res.json({
                  msg: "Actualizado!!",
                  usuario
        
    })
        
        
    } catch (error) {
        console.log(error)
    }
    
}

const usuariosPost = async (req, res) => {

    // obtenemos la request
    const { nombre, apellido, email, sexo,materias } = req.body;
    const usuario = new Usuario({ nombre, email, apellido, sexo , materias});

    // guardarDB
    await usuario.save()

    res.json({
        // nuestras respuestas...
        msg: "post api",
        usuario
    });
}

const deleteUser  = async (req, res) => {
    const {id} = req.params
    console.log(id)

    try {
        await Usuario.findByIdAndDelete(id)

        res.json({
        msg: "usuario eliminado de la base de datos"
    });
    } catch (error) {
        console.log(error)
    }
   

    
}

const usuarioPorCorreo = async(req,res) => {
    try {
        const {correo} = req.params
        const usuario = await Usuario.findOne({email:correo}).populate("materias")
        if(!usuario){
            res.json({
                msg: `el correo ${correo} no esta registrado en la db`
            })
        }
        (usuario.sexo == "masculino") ? usuario.sexo = "Soy hombre" : usuario.sexo = "Soy Mujer"
        usuario.fullname = `${usuario.nombre} ${usuario.apellido}`
        res.json({
        msg: usuario
    })
    } catch (error) {
        console.log(error)
    } 
}

module.exports = {
    usuariosGet,
    usuariosPost,
    deleteUser,
    usuariosPut,
    usuariosPut,
    usuarioPorCorreo
    
}