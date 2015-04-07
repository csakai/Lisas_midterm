var vegApp = angular.module('vegApp',[])

vegApp.controller('itemListController'['$scope',function($scope)]{

function itemListController( $scope ){

		$scope.items = [
		{type: 'strawberry', name: 'Herbert Strawberry', occupation: 'dogwalker', superpower: 'power-C boost', imageurl: 'images/strawb.jpg' },

{type: 'blueberry', name: 'Ulysses Blueberry', occupation: 'construction worker', superpower: 'super strength', imageurl: 'images/blueb.jpg' },

{type: 'orange', name: 'Otto Sly Orange', occupation: 'ninja', superpower: 'serious defense', imageurl: 'images/orange.jpg' }

		];

		$scope.additem = function(item){
			$scope.items.push( item );
			$scope.adding_item = {};
		};
};
	});

vegApp.config(["$routeProvider", function($routeProvider) {

	$routeProvider.
	when("/", {
		templateUrl: "index3.html",
		controller: "itemList"
	}).
	when("/login", {
		templateUrl: "partials/login.html",
		controller: "registration"
	}).
	when("/moreinfo", {
		templateUrl: "partials/moreinfo.html"
		controller: "moreinfo"
	}).
	when("/recipes", {
		templateUrl: "recipes.html"
		controller: "recipes"
	}).
	otherwise({
		redirectTo: "/login"
	});

}])

