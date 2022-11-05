const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPut, usuariosPost } = require('../controllers/usuarios');
const { emailExiste, } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();


router.get('/', usuariosGet);

router.put('/:id', [
    check("nothing put").isMongoId(),
    validarCampos

], usuariosPut);

router.post('/', [
    // CHECK CON EXPRESS VALIDATOR
    check("nombre", "el nombre no es valido").not().isEmpty(),
    check("email", "el email no es valido").isEmail(),
    check("email").custom((email) => emailExiste(email)),
    validarCampos
], usuariosPost);

module.exports = router; 