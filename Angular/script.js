
	/*var app = angular.module('myapp', ['ngRoute']);

	// configure our routes
	app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/register', {
				templateUrl : 'view/register.html'
				
			})

			// route for the about page
			.when('/login', {
				templateUrl : 'view/login.html'
			
			})
			.otherwise('/',{

				templateUrl : 'index.html'
			})

			// route for the contact page
		
	});*/


	var routerApp = angular.module('myapp', ['ui.router']);

    routerApp.config(function($stateProvider, $urlRouterProvider) {
    
   $urlRouterProvider.otherwise('/home');
    
    $stateProvider
         
         .state('home', {
            url: '/home',
            views: {
                "header": { 
                     templateUrl: "view/header.html" 
                },
                "content": { 
                    templateUrl: "view/content.html",
                    
                },
                "footer": { 
                   templateUrl: "view/footer.html" 
                }
            }
        })


 .state('register', {
            url: '/register',
            views: {
                "header": { 
                     templateUrl: "view/header.html" 
                },
                "content": { 
                    templateUrl: "view/register.html",
                     controller:  'registercontroller'
                    
                },
                "footer": { 
                   templateUrl: "view/footer.html" 
                }
            }
        })


.state('login', {
            url: '/login',
            views: {
                "header": { 
                     templateUrl: "view/header.html" 
                },
                "content": { 
                    templateUrl: "view/login.html",
                    controller:  'logincontroller'
                    
                },
                "footer": { 
                   templateUrl: "view/footer.html" 
                }
            }
        })


.state('aboutus', {
            url: '/aboutus',
            views: {
                "header": { 
                     templateUrl: "view/header.html" 
                },
                "content": { 
                    templateUrl: "view/aboutus.html",
                    
                },
                "footer": { 
                   templateUrl: "view/footer.html" 
                }
            }
        })

.state('gallary', {
            url: '/gallary',
            views: {
                "header": { 
                     templateUrl: "view/header.html" 
                },
                "content": { 
                    templateUrl: "view/gallary.html",
                    
                },
                "footer": { 
                   templateUrl: "view/footer.html" 
                }
            }
        })


.state('contactus', {
            url: '/contactus',
            views: {
                "header": { 
                     templateUrl: "view/header.html" 
                },
                "content": { 
                    templateUrl: "view/contactus.html",
                    
                },
                "footer": { 
                   templateUrl: "view/footer.html" 
                }
            }
        })

});
