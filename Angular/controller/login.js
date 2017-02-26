routerApp.controller('logincontroller', ['$scope',function($scope) {

		$scope.login = function(user){
			alert(user.email + " "+user.password);
		}
	 
	}
]);