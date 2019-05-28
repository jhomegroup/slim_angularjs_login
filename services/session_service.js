'use strict';
 
app.factory('sessionService', ['$http', function($http){
	return{
		set: function(key, value){
			return sessionStorage.setItem(key, value);
		},
		get: function(key){
			return sessionStorage.getItem(key);
		},
		destroy: function(key){
			$http.post('api/logout');
			return sessionStorage.removeItem(key);
		}
	};
}]);