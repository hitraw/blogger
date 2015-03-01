/**
 * client side angular script file
 * @author Hitesh
 */

// define main module
var app = angular.module("Blogger", []);

// define blog controller along with dependent services to be injected 
app.controller("BlogController", [
		'$scope',
		'$http',
		'$window',
		function($scope, $http, $window) {
			$scope.blogs = [];

			$scope.blog = {
				title : '',
				description : '',
				author : ''
			};

			// fetch all blog posts
			$http.get('/blog-api/list/').success(function(data) {
				console.log(data);
				$scope.blogs = data;
			});

			// function to add blog post
			$scope.addBlog = function() {

				$http.post('/blog-api/create/', $scope.blog).success(
						function(data) {
							console.log(data);
							alert("Blog post saved successfully");
							// redirect to listing page
							$window.location = '/';
						}).error(function(err,status){
					        alert("Error in saving blog post");      
					    });
			};

		} ]);
