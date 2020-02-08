(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath,) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };


/* https://YOUR-CHOSEN-SUBDOMAIN.herokuapp.com/menu_items/SHORT-NAME.json, 
*/
service.getMenuItem = function (short_name) {
    return $http.get(ApiPath + `/menu_items/${short_name}.json`).then(
      function (response) {
        console.log("status: ", response.status);
        return response.data;},
      function (response) {
        console.log("Error Occurred!!!:", response.status);
        return response.data;});
  };

}  // END_OF_function MenuService


})();
