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

router.get('/quizes', quizController.index);
// El método por convenio se llama 'show' (antes se llamaba quetion)
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

module.exports = router;
