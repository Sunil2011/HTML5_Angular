
//var host = "http://" + window.location.hostname;
//var basePath = host + '/PhpProject5_album/ZendSkeletonApplication/public/stzs' ;

   // above paths are .. defined in path.js

angular.module('students').service('postDataSrvc', function($http ){
   this.postStudForAdd = function($scope){
      return $http.post(basePath + '/angular/add', {'name':$scope.sName , 'department':$scope.sDep }) ; 
   } ;
   
});


