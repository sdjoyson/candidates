var http = require('http');
var path = require ('path');
var mongoose = require('mongoose');
var express = require('express');
// var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();



app.set('port',process.env.PORT || 8000);
app.set('views',__dirname + '/views');
app.set('view engine', 'jade');



app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.cookieParser());
app.use(express.static(path.join(__dirname,'views')));
app.use(session({secret:"111"}))

mongoose.connect('mongodb://localhost/mydb6');

var Schema = new mongoose.Schema({

	_id : Number,
	phone:Number,
	name : String,
	email :String,
	qualification :String,
	skill :String,
	experience :String,
	passout :String,
	address :String,
	pincode :Number,
	rlproject :String,	
	acproject :String,
	time : String	

});

var user = mongoose.model('candidate6',Schema);



// app.get('/',function(req,res){

   	
   
  
	
// 	user.find({}, function(err,docs){

// 		if(err) res.json(err);
// 		else 
			
// 			res.render('index2',{users:docs[0]});
		
// 	});


// });







app.post("/form",function(req,res){
	

	new user ({

			 _id : req.body.phone,
			 phone:req.body.phone,
			 name :req.body.name1,
			 email :req.body.email,
			 qualification : req.body.qualification,
			 skill :req.body.skills,
			 experience :req.body.experience,
			 passout :req.body.passout,
			 address :req.body.address,
			 pincode :req.body.pincode,
			 rlproject :req.body.rlproject,
			 acproject : req.body.acproject,
			 time : req.body.stwa
			

	}).save(function(err,docs){

			
			if(err)res.json(err);

				else 

				   	res.send(req.body);



					
				 
				
	});



});





var server = http . createServer(app).listen(app.get('port'),function(){


	console.log('Express server listen on port'+ app.get('port'));
});





