(function () {
"use strict";
angular.module('public')
.controller('MyinfoController', MyinfoController);
MyinfoController.$inject = ['MenuService','UserService','ApiPath'];
function MyinfoController(MenuService,UserService,ApiPath) {
  var myinfo = this;
  console.log("Here in myinfo");
  var result = UserService.popUser();
  if (result!==null){
    myinfo.user=result;	
    // favorite menu's infomation comes here.

    myinfo.basePath = ApiPath;
    console.log("myinfo.basePath: ", myinfo.basePath);

  };

}  // END_OF_MyinfoController

})(); // END_OF_IIFE

