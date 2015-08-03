// Importamos el modelo para poder acceder a DB
var models = require('../models/models.js');


// GET /quizes
exports.index = function(req, res){
	models.Quiz.findAll().then(function(quizes){
		res.render('quizes/index.ejs', {quizes: quizes});
	})
};


// GET /quizes/show
// Con los métodos models.Quiz.findAll() o find() buscamos los datos en la tabla Quiz y los procesamos en el callback del método success(..)
// ¡¡ Sustituimos el método success por el método then ('promesa') ya que el método 'success ha quedado anticuado
exports.show = function(req, res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
		res.render('quizes/show', {quiz: quiz})
	})
};



// GET /quizes/answer
// ¡¡ Sustituimos el método success por el método then ('promesa') ya que el método 'success ha quedado anticuado
exports.answer = function(req,res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
		if(req.query.respuesta === quiz.respuesta) {
			res.render('quizes/answer', {quiz: quiz, respuesta: 'Correcto'});
		}else{
			res.render('quizes/answer', {quiz: quiz, respuesta: 'Incorrecto'});
		}
	})
};

/*
// GET /quizes/question
exports.question = function(req, res) {
	res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

// GET /quizes/answer
exports.answer = function (req, res) {
	if (req.query.respuesta === 'Roma'){
		res.render('quizes/answer', {respuesta: 'Correcto'});}
	else {res.render('quizes/answer', {respuesta: 'Incorrecto'})}
};
*/
