(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);
UserService.$inject = [];
function UserService() {
	var service = this;

	service.pushUser = function (user) {
		service.user = user;
		console.log("user information: ", service.user)
  	};

  	service.popUser = function () {
		if (service.user) {
			console.log("user information: ", service.user)
			return service.user;
		} else {
			console.log("user information: none", service.user)
			return null;
 		}
 	}
}  // END_OF_function UserService

})();
