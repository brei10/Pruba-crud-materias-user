const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPut, usuariosPost, deleteUser,usuarioPorCorreo } = require('../controllers/usuarios');
const { emailExiste, } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const { validacionGenero } = require('../middlewares/validarGenero');


const router = Router();


router.get('/obtener', usuariosGet);

router.put('/actualizar/:id',[
    check("id","no es un id de mongo valido").isMongoId(),
    validarCampos
], usuariosPut);

router.post('/crear', [
    // CHECK CON EXPRESS VALIDATOR
    check("nombre", "el nombre no es valido").not().isEmpty(),
    check("email", "el email no es valido").isEmail(),
    check("email").custom((email) => emailExiste(email)),
    check("apellido", "el apellido es requerido").not().isEmpty(),
    validarCampos,
    validacionGenero,
], usuariosPost);

router.delete("/delete/:id",[
    check("id","no es un id de mongo valido").isMongoId(),
    validarCampos
], deleteUser);

router.get('/obtener/:correo', usuarioPorCorreo);

module.exports = router; 