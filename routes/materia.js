const { Router } = require('express');
const { check } = require('express-validator');
const { materiaPost, materiaGet, materiaPorIdGet,actualizarMateria, borrarMateria } = require('../controllers/materia');
const { validarCampos } = require('../middlewares/validar-campos');



const router = Router();


router.get('/obtener', materiaGet);


router.post('/crear-materia', [
    // CHECK CON EXPRESS VALIDATOR
    check("materia", "el nombre no es valido").not().isEmpty(),
    check("carrera", "la carrera es requerida").not().isEmpty(),
    check("semestre", "el semestre es requerido").not().isEmpty(),
    validarCampos,
], materiaPost);


router.get('/obtener/:id',[
    check("id","no es un id de mongo valido").isMongoId(),
    validarCampos
],materiaPorIdGet);


router.put("/actualizar/:id",[
    check("id","no es un id de mongo valido").isMongoId(),
    validarCampos
], actualizarMateria)


router.delete("/borrar/:id", borrarMateria)



module.exports = router; 