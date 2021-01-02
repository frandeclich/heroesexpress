const express = require('express');
const router = express.Router();

const heroeRouter = require('../controllers/heroeController');

router.get('/', heroeRouter.heroes);
router.get('/detalle/:id', heroeRouter.idHeroes);
router.get('/bio/:id/:ok?', heroeRouter.okHeroes);


module.exports = router;