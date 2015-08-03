var path = require('path');

// Postgres DATABASE_URL = postgres://user:password@host:port/database
// SQLite DATABASE_URL = sqlite://:@:/
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name = (url[6] || null);
var user = (url[2] || null);
var pwd = (url[3] || null);
var protocol = (url[1] || null);
var dialect = (url[1] || null);
var port = (url[5] || null);
var host = (url[4] || null);
var storage = process.env.DATABASE_STORAGE;



// Cargar modelo ORM
var Sequelize = require('sequelize');


/*
// Usar BBDD SQLite:
var sequelize = new Sequelize(null, null, null, 
			{dialect: 'sqlite', storage: 'quiz.sqlite'});
*/

// Usar BBDD SQLite o Postgres
var sequelize = new Sequelize(DB_name, user, pwd,
	{	dialect : protocol,
		protocol: protocol,
		port: port,
		host: host,
		storage: storage, // solo SQLite (.env)
		omitNull: true // solo Postgres
	}	
);						

// Importar la definición de la tabla Quiz en quiz.js
var quiz_path = path.join(__dirname, 'quiz');
var Quiz = sequelize.import(quiz_path);

// Exportar definición de tabla Quiz
exports.Quiz = Quiz

// Crear e inicializar la tabla de preguntas en DB
// ¡¡ Al principio utiliza el método success (que dará error) y luego los sustituye por el método then al añadir BD en Heroku
// -sequelyze.sync() sincroniza la DB con el método success cuando se ha sincronizado.
// En el callback de sequelize.sync().success(..) introducimos en la DB la misma pregunta de las versiones anteriores, para que todo funcione igual.
sequelize.sync().then(function(){
// success(..) ejecuta el manejador una vez creada la tabla
// - Quiz.count().success(..) devuelve en count el número de filas de la tabla.
	Quiz.count().then(function(count){
		if(count === 0){ // la tabla se inicializa solo si está vacía
			// -Quiz.create(..objeto..) creala primera pregunta de la tabla
			// Los campos de la tabla deben tener el mismo nombre que las propiedades
			Quiz.create({ 	pregunta: 'Capital de Italia',
					respuesta: 'Roma'
					});
			Quiz.create({ 	pregunta: 'Capital de Portugal',
					respuesta: 'Lisboa'
					})
			.then(function(){console.log('Base de datos inicializada')});
			};
	});
});
