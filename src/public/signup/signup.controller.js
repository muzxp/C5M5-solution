// signup-controller.js
(function () {
"use strict";
angular.module('public')
.controller('SignupController', SignupController);
SignupController.$inject = ['MenuService','$scope','UserService'];
function SignupController(MenuService,$scope,UserService) {
  var signup = this;
  signup.submit = function () {
    // Try to retrieve favorite menu., if success then save signup object else display error message
    MenuService.getMenuItem(signup.user.short_name).then(
    	function(data){
    		$scope.data = data;
    		if (! data.short_name) {
    			signup.not_found = true;
    		} else {             // save signup data to somewhere
    			signup.not_found = false;
    			console.log("data: ",data);
    			signup.user.menu = data;
    			UserService.pushUser(signup.user);
    			signup.completed = true;
    			console.log("Submitted");
    		}
    	});
    
  };
}

})();