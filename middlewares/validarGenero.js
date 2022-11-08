


const validacionGenero = async(req,res,next) => {
    const {sexo} = await req.body;

    if (sexo != "masculino" && sexo != "femenino" ){
        return res.json({
            msg: `el genero ${sexo} no es un genero valido`
        })
    }

    next();
} 


module.exports = {
    validacionGenero
}