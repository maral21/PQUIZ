var models = require('../models');

//GET /quizes/question
exports.question= function(req,res,next){
	models
	.quizes.findOne()//Busca la primera pregunta
	.then(function(quiz)){
		if(quiz){
	var answer = req.query.answer ||'';
	res.render('quizes/question',{question:quiz.question, answer : answer}); 
}else{
	throw new Error('No hay preguntas en la BBDD.');
}
}).catch(function(error){next(error);});
};

//GET /check

exports.check = function(req,res,next){
 models
 .quiz
 .findOne()//Busca la primera pregunta
 .then(function(quiz)){
 	if(quiz){
    var answer = req.query.answer ||'';
	var result= ((answer === quiz.answer) ? 'Correcta' : 'Incorrecta');
	res.render('quizes/result', {result: result, answer:answer});
}else{
	throw new Error('No hay preguntas en la BBDD.');
}
}).catch(function(error){next(error);});
};