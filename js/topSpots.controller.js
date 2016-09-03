angular.module('app').controller('topspotsListCtrl', function($scope, topspotsFactory) {
	topspotsFactory.getTopSpots().then(
		function(response) {
			$scope.topspots = response.data;
		}, 
		function(err) {
			alert(err);
		}
	);
});