materialAdmin
    .value("api","https://helping-hands-admin.firebaseio.com")
    .config(function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/login");

        $stateProvider
        
            //------------------------------
            // AUTH
            //------------------------------

            .state ('login', {
                url: '/login',
                templateUrl: 'login.html'
            })

            //============================================
            // DASHBOARD
            //============================================

            .state ('home', {
                url: '/home',
                templateUrl: 'views/home.html'
            })

            //============================================
            // VILLAGE
            //============================================

            .state ('village', {
                url: '/village',
                templateUrl: 'views/village.html'
            })

            .state ('village.addvillage', {
                url: '/addvillage',
                cache: false,
                templateUrl: 'views/addvillage.html'
            })

            .state ('village.editvillage', {
                url: '/editvillage/:id',
                cache: false,
                templateUrl: 'views/editvillage.html'
            })

            .state ('village.viewvillage', {
                url: '/viewvillage',
                cache: false,
                templateUrl: 'views/viewvillage.html'
            })

            .state ('village.villageimprovements', {
                url: '/villageimprovements/:id',
                cache: false,
                templateUrl: 'views/villageimprovements.html'
            })

            .state ('village.villageforumchat', {
                url: '/villageforumchat/:id',
                cache: false,
                templateUrl: 'views/villageforumchat.html'
            })

            .state ('village.villagedirectchat', {
                url: '/villagedirectchat/:id',
                cache: false,
                templateUrl: 'views/villagedirectchat.html'
            })

            //============================================
            // SCHOOL
            //============================================

            .state ('school', {
                url: '/school',
                templateUrl: 'views/school.html'
            })

            .state ('school.addschool', {
                url: '/addschool',
                cache: false,
                templateUrl: 'views/addschool.html'
            })

            .state ('school.editschool', {
                url: '/editschool/:id',
                cache: false,
                templateUrl: 'views/editschool.html'
            })

            .state ('school.viewschool', {
                url: '/viewschool',
                cache: false,
                templateUrl: 'views/viewschool.html'
            })

            .state ('school.improvements', {
                url: '/improvements/:id',
                cache: false,
                templateUrl: 'views/improvements.html'
            })

            .state ('school.forumchat', {
                url: '/forumchat/:id',
                cache: false,
                templateUrl: 'views/forumchat.html'
            })

            .state ('school.directchat', {
                url: '/directchat/:id',
                cache: false,
                templateUrl: 'views/directchat.html'
            })

            //============================================
            // VOLUNTEER
            //============================================

            .state ('volunteer', {
                url: '/volunteer',
                templateUrl: 'views/volunteer.html'
            })

            .state ('volunteer.addvolunteer', {
                url: '/addvolunteer',
                cache: false,
                templateUrl: 'views/addvolunteer.html'
            })

            .state ('volunteer.editvolunteer', {
                url: '/editvolunteer/:id',
                cache: false,
                templateUrl: 'views/editvolunteer.html'
            })

            .state ('volunteer.viewvolunteer', {
                url: '/viewvolunteer',
                cache: false,
                templateUrl: 'views/viewvolunteer.html'
            })

            .state ('volunteer.volunteerchat', {
                url: '/volunteerchat/:id',
                cache: false,
                templateUrl: 'views/volunteerchat.html'
            })

            .state ('volunteer.volunteerworks', {
                url: '/volunteerworks/:id',
                cache: false,
                templateUrl: 'views/volunteerworks.html'
            })

            //============================================
            // NEEDS
            //============================================

            .state ('needs', {
                url: '/needs',
                templateUrl: 'views/needs.html'
            })

            .state ('needs.addneeds', {
                url: '/addneeds',
                cache: false,
                templateUrl: 'views/addneeds.html'
            })

            .state ('needs.editneeds', {
                url: '/editneeds/:id',
                cache: false,
                templateUrl: 'views/editneeds.html'
            })

            .state ('needs.viewneeds', {
                url: '/viewneeds',
                cache: false,
                templateUrl: 'views/viewneeds.html'
            })

            //============================================
            // COMMON CHAT
            //============================================

            .state ('chat', {
                url: '/chat',
                templateUrl: 'views/chat.html'
            })
            
    });
