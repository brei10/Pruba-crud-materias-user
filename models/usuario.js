
const { Schema, model } = require('mongoose');


const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, "el nombre es requerido"]
    },
    apellido: {
        type: String,
        required: [true, "el apellido no es valido"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "el email no es valido"],
    },
    sexo: {
        type: String,
    },
    materias: [{
        type: Schema.Types.ObjectId, ref: "materia"
    }]
});


module.exports = model('Usuario', UsuarioSchema)
