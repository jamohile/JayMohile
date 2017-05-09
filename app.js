
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

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
var jsonParser = bodyParser.json();
var urlParser = bodyParser.urlencoded({extended: false});

app.get('/', urlParser, function(req, res){
	res.sendFile('../public/index.html');
});
http.createServer(app).listen(app.get('port'), function(){
  console.log('JayMohile is active on port ' + app.get('port'));
});
