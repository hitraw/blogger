/**
 * Blog Model
 * @author Hitesh
 */

// initialize mongoose service
var mongoose = require("mongoose");
var mongodb_uri = process.env.MONGODB_URI || 'mongodb://localhost/mydb';  
mongoose.connect(mongodb_uri);


// define the schema for blog document
var blogSchema = mongoose.Schema({
	title : String,
	description : String,
	author : String
});

// create a model for this schema that maps
// to collection of blog documents in the DB.
var blog = mongoose.model("blog", blogSchema);

// public method to create blog document as requested
exports.createBlog = function(req, res) {
	var blogObject = req.body;
	console.log("blog to be created:" + blogObject);
	blog.create(blogObject, function(err, blog) {
		console.log("err:" + err);
		console.log("blog saved:" + blogObject);
		if (err) {
			res.send(err);
		} else {
			res.json(blog);
		}
	});
};

// public method to provide list of blog documents as requested
exports.listBlogs = function(req, res) {
	blog.find(function(err, blogs) {
		console.log("err:" + err);
		console.log("blog list:" + blogs);
		if (err) {
			res.send(err);
		} else {
			res.json(blogs);
		}
	});
};
