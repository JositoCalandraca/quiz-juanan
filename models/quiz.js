module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Quizzes', 
		{ pregunta: DataTypes.STRING,
		  respuesta: DataTypes.STRING,
		});	

}
