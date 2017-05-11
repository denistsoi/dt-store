### pre ng-1.5.x example

    var Store = require('dt-datastore-service');
    angular.service('DataStoreService', Store);

    directive.js

    angular.directive('some directive', ['DataStoreService', function(DataStoreService) {
      a.link = function(scope, el, attrs, controller, transcludeFn) {
        DataStoreService.on('some event', function(data) {
          // do something with the data
        });
      }
      return a;
    }]);

    controller.js

    angular.controller('some controller', function(scope, DataStoreService) {
      DataStoreService.emit('some event', data);
    });

#### Why would you do this?

- If the controller/directive relationship is not direct parent/child, i.e.

    app/
      controller1/
        directive       // the directive that want
      controller2/

    controller2.js
    
    angular.controller('controller2', function(scope, DataStoreService) {
      // some async function 
      DataStoreService.emit('some event', data);
    });

    controller1.js

    angular.controller('controller1', function(scope, DataStoreService) {
      // you can assign and pass the data into the directive
      DataStoreService.on('some event', data);
    });

But why not use `$rootScope`

Firstly, I don't want to pollute the $rootScope with a bunch of emitters (i.e. I want to limit the number of occurances that this is instantiated);
This also allows me not to continually pass the parameter down the component/directive tree.