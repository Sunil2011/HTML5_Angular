
//var host = "http://" + window.location.hostname;
//var basePath = host + '/PhpProject5_album/ZendSkeletonApplication/public/stzs' ;

 // above paths are .. defined in path.js


angular.module('students').controller('StudentEditController', function( $scope, $location , editDataSrvc ){
    
    editDataSrvc.getEditData($scope).then(function(response){
        $scope.stzToEditId = response.data.stz.id ;
        $scope.stzToEditName = response.data.stz.name ;
        $scope.stzToEditDep = response.data.stz.department ;
    });
    
   $scope.editStz = function(){ 
       editDataSrvc.updateData($scope).then( $location.path('/list') ) ;
    };
    
});

/*
  function($http , $scope, $routeParams, $location){
    
    $http.get(basePath + '/angular/dataToEditOrDelete/' + $routeParams.id).then(function(response){
        $scope.stzToEdit = response.data.stz ;
    });
     
}
 
 */