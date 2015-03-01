/**
 * Server side Express script
 * @author Hitesh
 */

// module dependencies
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

// model dependency
var blog = require('./models/BlogModel');

// define url mapping for web pages
app.get('/', routes.index); // home page
app.get('/new', routes.add); // add blog page

// define url mapping for REST APIs
app.get('/blog-api/list', blog.listBlogs); 
app.post('/blog-api/create', blog.createBlog); 

// start server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
