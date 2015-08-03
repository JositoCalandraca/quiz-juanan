// routes

//Hay que importar el módulo express explicitamente donde lo vayamos a utilizar, aunque ya esté importado en otro módulo
var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/author');

// Autoload de comandos con :quizId
// Si el parámetro 'quizId' existe en la ruta, entonces se invoca quizController.load()
router.param('quizId', quizController.load); // autoload :quizId
// Definición de rutas de /quizes
router.get('/quizes', quizController.index);
// El método por convenio se llama 'show' (antes se llamaba quetion)
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

module.exports = router;
