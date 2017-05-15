
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , morgan = require('morgan')
  , bodyParser = require('body-parser');
var app = express();
var router = express.Router();

MongoClient = require('mongodb').MongoClient;
var url = "mongodb://jamohile:hj47rr6r6qId1rzx@cluster0-shard-00-00-ncgje.mongodb.net:27017,cluster0-shard-00-01-ncgje.mongodb.net:27017,cluster0-shard-00-02-ncgje.mongodb.net:27017/JayMohile?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";


// all environments
app.set('port', process.env.PORT || 3002);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
var jsonParser = bodyParser.json();
var urlParser = bodyParser.urlencoded({extended: false});

app.get('/', urlParser, function(req, res){
	console.log('hello');
	MongoClient.connect(url, function(err, db){
		var collection = db.collection('portfolio_software');
		collection.find({}, function(err, cursor){
			cursor.toArray().then(function(data) {
				console.log(data);
				res.render('../views/index', {
			        portfolio: data
			    });
				//res.json(data[0]);
		});
	});
});
	//res.sendFile('../public/index.html');
});
http.createServer(app).listen(app.get('port'), function(){
  console.log('JayMohile is active on port ' + app.get('port'));
});
