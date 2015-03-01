/**
 * Blogger Model
 * @author Hitesh
 */

var mongoose = require("mongoose");
//mongoose.connect('mongodb://localhost/mydb');
mongoose.connect('mongodb://node:node2434@ds031721.mongolab.com:31721/heroku_app34476373');


// define the schema for blog document
var blogSchema = mongoose.Schema({
	title : String,
	description : String,
	author : String
});

// create a model for this schema that maps
// to collection of blog documents in the DB.
var Blogger = mongoose.model("Blogger", blogSchema);

// public method to create blog document from API req
exports.createBlog = function(req, res) {
	console.log("blog:" + req.body);
	var blogObject = req.body;
	Blogger.create(blogObject, function(err, todo) {
		console.log("err:" + err);
		console.log("blog:" + blogObject);
		if (err) {
			res.send(err);
		} else {
			res.json(todo);
		}
	});
};

// public method to provide list of blog documents from API req
exports.listBlogs = function(req, res) {
	Blogger.find(function(err, blogs) {
		console.log("err:" + err);
		console.log("blogs:" + blogs);
		if (err) {
			res.send(err);
		} else {
			res.json(blogs);
		}
	});
};
