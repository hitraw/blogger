/**
 * client side angular script file
 * @author Hitesh
 */

var app = angular.module("Blogger",[]);

app.controller("BlogController",['$scope','$http',function($scope,$http){
	$scope.blogs = [
//	              {title: "Title 1", description: 'Description 1', author: 'Author 1'},
//	              {title: "Title 2", description: 'Description 2', author: 'Author 2'},
//	              {title: "Title 3", description: 'Description 3', author: 'Author 3'}
	              ];

	$scope.blog = {title: '', description: '', author: ''};
	
//	this.listBlogs();
	
//	this.listBlogs = function(){
		$http.get('/blog-api/list/').success(function(data){
			console.log(data);
			$scope.blogs = data;
		});
//	};
	
	$scope.addBlog = function(){
		
		$http.post('/blog-api/create/',$scope.blog)
			.success(function(data){
			console.log(data);
			alert("Record saved successfully");
			$scope.blog = {title: '', description: '', author: ''};
		});
		
	};
	
}]);

