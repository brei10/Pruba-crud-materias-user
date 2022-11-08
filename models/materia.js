



const { Schema, model } = require('mongoose');


const MateriaSchema = Schema({
    materia: {
        type: String,
        required: [true, "el nombre es requerido"]
    },
    semestre: {
        type: Number,
        required: [true, "el semestre no es valido"],
    },
    carrera: {
        type: String,
        required: [true, "la carrera no es valida"],
    },
});


module.exports = model('Materia', MateriaSchema)
