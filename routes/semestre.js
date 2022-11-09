const { Router } = require('express');
const { semestreGet, semestrePut, semestrePost, semestreDelete } = require('../controllers/semestre');


const router = Router();


router.get('/obtener', semestreGet);

router.put('/actualizar/:id', semestrePut);

router.post('/crear', semestrePost);

router.delete("/delete/:id", semestreDelete);

module.exports = router; 