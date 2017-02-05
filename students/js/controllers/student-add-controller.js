
//var host = "http://" + window.location.hostname;
//var basePath = host + '/PhpProject5_album/ZendSkeletonApplication/public/stzs' ;
  // above paths are .. defined in path.js




angular.module('students').controller('StudentAddController',function($scope , $location, postDataSrvc ){
   
  $scope.insertData = function(){
      postDataSrvc.postStudForAdd($scope).then( $location.path('/list') ) ;
  };
   
}) ;



//  .success( $location.path( redrct ) ) ;

/*
 *  function($scope , $http, $location){
       $scope.insertData = function(){
        
            $http.post( basePath+'/angular/add' , {'name':$scope.sName , 'department':$scope.sDep } ) 
                .then($location.path( redrct )
                ) ;
        } ;
    }
*/