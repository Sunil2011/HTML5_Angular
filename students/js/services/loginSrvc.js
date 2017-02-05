
//var host = "http://" + window.location.hostname;
//var basePath = host + '/PhpProject5_album/ZendSkeletonApplication/public/stzs' ;

// above paths are .. defined in path.js

angular.module('students').service('loginSrvc', function($http , sessionSrvc, $location){
   
    this.auth = function($scope){
       return $http.post(basePath + '/angularLog', { 
           'username' : $scope.uname , 'password' : $scope.upass 
       }) ;  
    };
    
    
    this.logout = function(){
        
        sessionSrvc.destroy('uid');
        $location.path('/login');
        
    };
    
    this.isLogged = function(){
        
        /*
        if(sessionSrvc.get('user')){
            return true ;
        }else{
            return false ;
        }
        */
       
       var checkSessionServer = $http.post('data/check_session.php') ;
       return  checkSessionServer ;
       
    };
    
    
});



