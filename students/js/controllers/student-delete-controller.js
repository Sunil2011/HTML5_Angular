
//var host = "http://" + window.location.hostname;
//var basePath = host + '/PhpProject5_album/ZendSkeletonApplication/public/stzs' ;
  // above paths are .. defined in path.js


angular.module('students').controller('StudentDeletController',function($scope, $location, deleteDataSrvc ){
    
    deleteDataSrvc.getDltData($scope).then(function(response){
        $scope.stzToDltName = response.data.stz.name ;
        $scope.stzToDltDep = response.data.stz.department ;
        $scope.stzToDltId = response.data.stz.id;
    });
    
    $scope.dltStzYes = function(){
        deleteDataSrvc.DltDataYes($scope).then( $location.path('/list') );
    };
    $scope.dltStzNo = function(){
        deleteDataSrvc.DltDataNo($scope).then( $location.path('/list') );
    };
    
});


