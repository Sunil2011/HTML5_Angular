
var app = angular.module('students') ;
app.config(['$routeProvider', function($routeProvider){
        $routeProvider
           .when('/',{
                redirectTo:'/login'
            })
            .when('/login',{
                templateUrl :'templates/students/login.html',
                controller : 'StudentLoginController'
            })
            .when('/list',{
                templateUrl : 'templates/students/index.html',
                controller : 'StudentIndexController'
            }) 
            .when('/add',{
                templateUrl : 'templates/students/add.html',
                controller : 'StudentAddController'
            })
            .when('/edit/:id',{
                templateUrl : 'templates/students/edit.html',
                controller : 'StudentEditController'
            })
            .when('/delete/:id',{
                templateUrl : 'templates/students/delete.html',
                controller : 'StudentDeletController'
            })
             .otherwise({
                redirectTo : '/list'
            })
           
        ;
            
                
}]);

app.run(function($rootScope , $location , loginSrvc ){
    
    var routesPermission = ['/list' , '/add' ] ;
    
    $rootScope.$on('$routeChangeStart', function(){
       // object.indexOf(x) returns -1 if not found , same of string.indexOf()
       
        if(routesPermission.indexOf($location.path()) !== -1 || $location.path().indexOf('/edit/') !== -1 || $location.path().indexOf('/delete/') !== -1  ){
            
            var connected = loginSrvc.isLogged() ;
            connected.then(function(response){
                if( !response.data ){
                    $location.path('/login');
                }
            });
        }
        
    });
    
});


