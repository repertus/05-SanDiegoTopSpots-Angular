angular.module('app').factory('topspotsFactory', function($http){
	return {
		getTopSpots: function () {
			return $http.get('../topspots.json');
		}
	};
})