angular.module('app').controller('topspotsListCtrl', function($scope, topspotsFactory) {
	topspotsFactory.getTopSpots().then(
		function(response) {
			//Pull the JSON data through factory to be availaible at the $scope
			$scope.topspots = response.data;
			
			// Below is the routine to render al the San Diego Hot Spots into the Google Map Screen
			var i = 0;
			var markers = [];

			for(i = 0; i < ($scope.topspots).length; i++){
				markers.push({
					'id' : i,
					'coords': {
						'latitude' : $scope.topspots[i].location[0],
						'longitude' : $scope.topspots[i].location[1]
					},
					'options' : {
						'title' : $scope.topspots[i].name,
						'opacity': 0.6
					},
        			'content': $scope.topspots[i].description
				});	
			}
			$scope.markers = markers;
		}, 
		function(err) {
			alert(err);
		}
	);

	// Adds the user input to the table
	$scope.addNew = function() {
		var lng = [$scope.location_lng];
		var lat = [$scope.location_lat];
		$scope.location = lng.concat(lat);
		$scope.topspots.unshift({ 'name' : $scope.name, 'description' : $scope.description, 'location' : $scope.location});
		//console.log($scope.location[0]);
		//console.log($scope.location[1]);
		// console.log($scope.topspots.length);
		$scope.markers.push({
			'id' : $scope.topspots.length - 1,
			'coords': {
				'latitude' : $scope.location_lat,
				'longitude' : $scope.location_lng
			},
			'options' : {
				'title' : $scope.name,
				'opacity': 0.6
			},
			'content': $scope.description
		})
		// Clears input after submission
   		$scope.name = null;
   		$scope.description = null;
   		$scope.location_lat = null;
   		$scope.location_lng = null;
	};


	// Displays default google map area into HTML
    $scope.map = { center: { latitude: 32.9, longitude: -116.8 }, zoom: 9 };
});