var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

//Definición de rutas de /quizzes
router.get('/quizzes',   quizController.index);
router.get('/quizzes/:quizId(\\d+)', quizController.show);
router.get('/quizzes/:quizId(\\d+)/check', quizController.check);


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* GET author. */
router.get('/author', function(req, res) {
  res.render('author', { title: 'Autores' });
});



// router.get('/question',quizController.question);
// router.get('/check',quizController.check);

module.exports = router;
