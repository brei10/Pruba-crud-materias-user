const  Materia = require("../models/materia")


const materiaPost = async (req, res) => {

    // obtenemos la request
    const { materia, semestre, carrera  } = req.body;
    const materiaCreada = new Materia({ materia, carrera , semestre });

    // guardarDB
    await materiaCreada.save()

    res.json({
        // nuestras respuestas...
        msg: "post api",
        materiaCreada
    });
}


const materiaGet = async(req,res) => {
    
    const [total, materiasObtenidas] = await Promise.all([
        Materia.count(),
        Materia.find()
    ]);

    res.json({
        total,
        materiasObtenidas

    });

}

const materiaPorIdGet = async(req,res) => {
    try {
            const {id} = req.params

            const materia = await Materia.findById(id)

            res.json({
        msg: materia ,id
    })
    } catch (error) {
        console.log(error)
    } 
}


const actualizarMateria  = async(req,res) => {
    try {
            const {id} = req.params
            const { _id, ...all } = req.body;
    
            const materia = await Materia.findByIdAndUpdate(id, all,{new:true});

            res.json({
            msg: materia
    })
    } catch (error) {
        console.log(error)
    }
    
}

const borrarMateria = async(req,res) => {
    try {
            const {id} = req.params
    
             await Materia.findByIdAndDelete(id,{new:true});

            res.json({
            msg: "materia eliminada"
    })
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = {
    materiaPost,
    materiaPorIdGet,
    materiaGet,
    borrarMateria,
    actualizarMateria,
   
    
}




