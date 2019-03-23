materialAdmin 

    // =========================================================================
    // CALENDAR WIDGET
    // =========================================================================

    .directive('fullCalendar', function($compile, $firebaseArray, api, $localStorage, $filter, $location){
        return {
            restrict: 'A',
            link: function(scope, element) {
                var ref =  new Firebase(api+"/hospitals/"+$localStorage.datanow.hospitalname+"/doctors/"+$localStorage.datanow.doctorid+"/calendar");
                var data = $firebaseArray(ref);
                data.$loaded().then(function(){
                    for(var i=0; i<data.length; i++){
                        var tokens = data[i].start.split('/');
                        data[i].start = new Date(tokens[2],parseInt(tokens[1])-1,tokens[0]);
                        console.log(data[i].start);
                    }
                    element.fullCalendar({
                        contentHeight: 'auto',
                        theme: true,
                        header: {
                            right: '',
                            center: 'prev, title, next',
                            left: ''
                        },
                        editable: false,
                        events: data
                    });
                });
                ref.on('child_changed', function(childSnapshot, preChildKeyValue){
                    var data = $firebaseArray(ref);
                    data.$loaded().then(function(){
                        for(var i=0; i<data.length; i++){
                            var tokens = data[i].start.split('/');
                            data[i].start = new Date(tokens[2],parseInt(tokens[1])-1,tokens[0]);
                            console.log(data[i].start);
                        }
                        element.fullCalendar({
                            contentHeight: 'auto',
                            theme: true,
                            header: {
                                right: '',
                                center: 'prev, title, next',
                                left: ''
                            },
                            editable: false,
                            events: data
                        });
                    });
                });
                ref.on('child_added', function(childSnapshot, preChildKeyValue){
                    var data = $firebaseArray(ref);
                    data.$loaded().then(function(){
                        for(var i=0; i<data.length; i++){
                            var tokens = data[i].start.split('/');
                            data[i].start = new Date(tokens[2],parseInt(tokens[1])-1,tokens[0]);
                            console.log(data[i].start);
                        }
                        element.fullCalendar({
                            contentHeight: 'auto',
                            theme: true,
                            header: {
                                right: '',
                                center: 'prev, title, next',
                                left: ''
                            },
                            editable: false,
                            events: data
                        });
                    });
                });
            }
        }
    })
    

    // =========================================================================
    // MAIN CALENDAR
    // =========================================================================

    .directive('calendar', function($compile, $firebaseArray, api, $localStorage, $filter, $location){
        return {
            restrict: 'A',
            scope: {
                select: '&',
                actionLinks: '=',
            },
            link: function(scope, element, attrs) {
                
                var date = new Date();
                var d = date.getDate();
                var m = date.getMonth();
                var y = date.getFullYear();
                var ref =  new Firebase(api+"/hospitals/"+$localStorage.datanow.hospitalname+"/doctors/"+$localStorage.datanow.doctorid+"/calendar");
                var data = $firebaseArray(ref);
                data.$loaded().then(function(){
                    for(var i=0; i<data.length; i++){
                        var tokens = data[i].start.split('/');
                        data[i].start = new Date(tokens[2],parseInt(tokens[1])-1,tokens[0]);
                        console.log(data[i].start);
                    }
                    element.fullCalendar({
                    header: {
                        right: '',
                        center: 'prev, title, next',
                        left: ''
                    },

                    theme: true, //Do not remove this as it ruin the design
                    selectable: true,
                    selectHelper: true,
                    editable: false,

                    //Add Events
                    events: data,

                    //On Day Select
                    select: function(start, end, allDay) {
                        console.log("start", start._d);
                        scope.select({
                            start: start._d
                        });
                    }
                });
                    console.log("directive", data);
                console.log(new Date(y, m, 1));
                //Generate the Calendar
                
                
                  
                //Add action links in calendar header
                element.find('.fc-toolbar').append($compile(scope.actionLinks)(scope));
                });
                ref.on('child_added', function(childSnapshot, preChildKeyValue){
                        var data = $firebaseArray(ref);
                        data.$loaded().then(function(){
                            for(var i=0; i<data.length; i++){
                                var tokens = data[i].start.split('/');
                                data[i].start = new Date(tokens[2],parseInt(tokens[1])-1,tokens[0]);
                                console.log(data[i].start);
                            }
                            element.fullCalendar({
                            header: {
                                right: '',
                                center: 'prev, title, next',
                                left: ''
                            },

                            theme: true, //Do not remove this as it ruin the design
                            selectable: true,
                            selectHelper: true,
                            editable: false,

                            //Add Events
                            events: data,

                            //On Day Select
                            select: function(start, end, allDay) {
                                console.log("start", start._d);
                                scope.select({
                                    start: start._d
                                });
                            }
                        });
                            console.log("directive", data);
                        console.log(new Date(y, m, 1));
                        //Generate the Calendar
                        
                        
                          
                        //Add action links in calendar header
                        element.find('.fc-toolbar').append($compile(scope.actionLinks)(scope));
                        });  
                });
                ref.on('child_changed', function(childSnapshot, preChildKeyValue){
                        var data = $firebaseArray(ref);
                        data.$loaded().then(function(){
                            for(var i=0; i<data.length; i++){
                                var tokens = data[i].start.split('/');
                                data[i].start = new Date(tokens[2],parseInt(tokens[1])-1,tokens[0]);
                                console.log(data[i].start);
                            }
                            element.fullCalendar({
                            header: {
                                right: '',
                                center: 'prev, title, next',
                                left: ''
                            },

                            theme: true, //Do not remove this as it ruin the design
                            selectable: true,
                            selectHelper: true,
                            editable: false,

                            //Add Events
                            events: data,

                            //On Day Select
                            select: function(start, end, allDay) {
                                console.log("start", start._d);
                                scope.select({
                                    start: start._d
                                });
                            }
                        });
                            console.log("directive", data);
                        console.log(new Date(y, m, 1));
                        //Generate the Calendar
                        
                        
                          
                        //Add action links in calendar header
                        element.find('.fc-toolbar').append($compile(scope.actionLinks)(scope));
                        });  
                });
                
            }
        }
    })
    

    //Change Calendar Views
    .directive('calendarView', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.on('click', function(){
                    $('#calendar').fullCalendar('changeView', attrs.calendarView);  
                })
            }
        }
    })