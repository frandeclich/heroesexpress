const express = require('express');
const router = express.Router();

const mainRouter = require('../controllers/mainController');

router.get('/', mainRouter.index);
router.get('/creditos', mainRouter.creditos)


module.exports = router;