
const { Schema, model } = require('mongoose');

const SemestreSchema = Schema({
    numero: {
        type: Number,
        required: [true, "el numero es requerido"]
    },
    carrera: {
        type: String,
        required: [true, "la carrera no es valido"],
    },
}, {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
});

SemestreSchema.virtual("materias", { // nombre de la propiedad al mostrarse en el res.json
    ref: 'Materia', // a que schema hace referencia?
    localField: '_id', // el id de ambos schemas 
    foreignField: 'semestre', // el mismo nombre de donde se hace la referencia
    justOne: false // falso que solo me traiga un objeto.
});
SemestreSchema.virtual("materia_ingles", { // nombre de la propiedad al mostrarse en el res.json
    ref: 'Materia',
    localField: '_id',
    foreignField: 'semestre',
    justOne: true,
    options: { // solo se muestra si hacen match, en este caso que el 
        // schema , dicho objeto, tenga ingles como materia
        match: {
            materia: 'ingles'
        }
    }
});

module.exports = model('Semestre', SemestreSchema)
