
//var host = "http://" + window.location.hostname;
//var basePathPhp = host + '/PhpProject5_album/ZendSkeletonApplication/public/stzs' ;
// above paths are .. defined in path.js

//var basePathAng = host + '/HTML5Application_Angular/students/#' ;



  // listData  is service ...
 angular.module('students').controller('StudentIndexController', function($scope, listDataSrvc  , loginSrvc, $location){
   
   listDataSrvc.getList($scope).then(function(response){
       $scope.names = response.data.stzs ;
   });
    
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x; 
    };
    
    $scope.basePathAng = basePathAng ;
    
    
    
    $scope.logout = function(){
      loginSrvc.logout() ;
        
    };
    
    
 });

