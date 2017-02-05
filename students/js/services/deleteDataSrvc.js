
// var host = "http://" + window.location.hostname;
// var basePath = host + '/PhpProject5_album/ZendSkeletonApplication/public/stzs' ;

 // above paths are .. defined in path.js

 angular.module('students').service('deleteDataSrvc', function($http, $routeParams){
    
     this.getDltData = function(){
         return $http.get( basePath + '/angular/dataToEditOrDelete/' + $routeParams.id ) ;
     };
     
     this.DltDataYes = function($scope){
         return $http.post(  basePath + '/angular/delete/' + $routeParams.id ,{
             'id' : $scope.stzToDltId , 'del': 'Yes' 
         }) ;
     };
     
     this.DltDataNo = function($scope){
         return $http.post(  basePath + '/angular/delete/' + $routeParams.id ,{
             'id' : $scope.stzToDltId , 'del': 'No' 
         }) ;
     };
     
 });

