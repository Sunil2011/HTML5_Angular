


angular.module('students').controller('StudentLoginController',function($scope , $http , $location, loginSrvc, sessionSrvc){
    
    $scope.login = function(){
        loginSrvc.auth($scope).then(function(response){
           var msg = response.data.msg ;
           var a_msg = response.data.authMsg ;
           
           if(msg){
              
              $scope.Em = false ; // for ng-if to show error msg
              
             
             $http.post('data/session_start.php' , {'msg' : msg } ).then(function(response){
                 var uid = response.data ;
                 // console.log(uid); 
                
                 if(uid){
                     sessionSrvc.set('uid', uid) ;
                     $location.path('/list');
                 }
                 else{
                     $location.path('/login');
                 }
                 
             }); 
             
             // $location.path('/list');
              
           }
           else{
               $scope.a_msg = a_msg ;
               $scope.Em = true ;
               
               $location.path('/login');
           }
           
        });
    };
    
    /* // included in loginSrvc
    $scope.logout = function(){
        
        sessionSrvc.destroy('user');
        $location.path('/login');
        
    } ;
    */
    
});


