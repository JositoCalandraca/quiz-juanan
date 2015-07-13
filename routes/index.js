' Hay que importar el módulo express explicitamente donde lo vayamos a utilizar, aunque ya esté importado en otro módulo
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

module.exports = router;
