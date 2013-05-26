var webSite = angular.module('webSite', []);

    webSite.config(function ($routeProvider) {
        $routeProvider
            .when('/view1',
                {
                    controller: 'ControllerOne',
                    templateUrl: 'app/partials/view1.html'
                })
            .when('/view2',
                {
                    controller: 'ControllerOne',
                    templateUrl: 'app/partials/view2.html'
                })
            .otherwise({ redirectTo: '/view1' });
    });
    

    webSite.controller('ControllerOne', function ($scope){
        $scope.cv = [
            { header: 'In short', content: 'Im a web developer' },
            { header: 'Experience', content: 'Check my experience' },
        ];    
        
    });
    
    webSite.controller('ControllerTwo', function ($scope){
        $scope.cv = [
            { header: 'In short', content: 'Im a web developer' },
            { header: 'Experience', content: 'Check my experience' },
        ];    
        
    });