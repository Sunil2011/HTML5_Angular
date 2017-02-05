
// var host = "http://" + window.location.hostname;
// var basePath = host + '/PhpProject5_album/ZendSkeletonApplication/public/stzs' ;

 // above paths are .. defined in path.js

angular.module('students').service('listDataSrvc', function($http){
   
    this.getList = function(){
      return $http.get(basePath + '/angular') ;  
    };
});


