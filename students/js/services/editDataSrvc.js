
 //var host = "http://" + window.location.hostname;
 //var basePath = host + '/PhpProject5_album/ZendSkeletonApplication/public/stzs' ;

  // above paths are .. defined in path.js

 angular.module('students').service('editDataSrvc', function($http, $routeParams){
     
    this.getEditData = function(){
         return $http.get( basePath + '/angular/dataToEditOrDelete/' + $routeParams.id ) ;
     };
     
     this.updateData = function($scope){
        return  $http.post( basePath + '/angular/update/' + $routeParams.id , {
            'id' : $scope.stzToEditId , 'name' : $scope.stzToEditName , 'department' : $scope.stzToEditDep
        }) ; 
     };
     
     
 });


