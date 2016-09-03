angular.module('app').factory('topspotsFactory', function($http){
	return {
		getTopSpots: function () {
			return $http.get('../topspots.json');
			// return $http.get('http://localhost:52160/api/TopSpots');
		}
	};
})