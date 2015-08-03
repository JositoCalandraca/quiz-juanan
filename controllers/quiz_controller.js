// Importamos el modelo para poder acceder a DB
var models = require('../models/models.js');

// GET /quizes/question
// Con los métodos models.Quiz.findAll() o find() buscamos los datos en la tabla Quiz y los procesamos en el callback del método success(..)
// ¡¡ Sustituimos el método success por el método then tras añadir la BD en Heroku
exports.question = function(req, res){
	models.Quiz.findAll().then(function(quiz){
		res.render('quizes/question', {pregunta:quiz[0].pregunta})
	})
};



// GET /quizes/answer
// ¡¡ Sustituimos el método success por el método then tras añadir la BD en Heroku
exports.answer = function(req,res){
	models.Quiz.findAll().then(function(quiz){
		if(req.query.respuesta === quiz[0].respuesta) {
			res.render('quizes/answer', {respuesta: 'Correcto'});
		}else{
			res.render('quizes/answer', {respuesta: 'Incorrecto'});
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
