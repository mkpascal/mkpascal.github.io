var webSite = angular.module('webSite', []);

    webSite.config(function ($routeProvider) {
        $routeProvider
            .when('/home',
                {
                    controller: 'HomeController',
                    templateUrl: 'app/partials/home.html'
                })
            .when('/skills',
                {
                    controller: 'SkillsController',
                    templateUrl: 'app/partials/skills.html'
                })
            .otherwise({ redirectTo: '/home' });
    });
    
    webSite.controller('HomeController', function ($scope){
    });
    
    webSite.controller('MenuController', function ($scope){
        $scope.menus = [
            { title: 'Contact', url: '#/view1' },
            { title: 'Github', url: '#/view2' },
            { title: 'Education', url: '#/view2' },
            { title: 'Experience', url: '#/view2' },
            { title: 'Skills', url: '#/skills' },
            { title: 'Profile', url: '#/home' },

        ];    
        
    });
    
    webSite.controller('SkillsController', function ($scope){
        $scope.list = [
            { title: 'Front-end Web Development', content:["HTML5","XHTML","CSS3","LESS","jQuery","Bootstrap","Flat UI"] },
            { title: 'Back-end Web Development', content:["Ruby on Rails","PHP Kohana"]  },
            { title: 'Revision Control System', content:["Git","SVN"]  },
            { title: 'Project Management', content:["Agile","Scrum"]  },
            { title: 'Miscellaneous', content:["Photoshop","Logic Pro","Audition"]  },

        ];    
        
    });
    
