//====================================================================================================================
// Module:    wideWorldTravel
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl: "partials/books.html",
                  controller: "GuideCtrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/GuideCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("GuideCtrl", function ($scope, GuideFactory) {
      GuideFactory.getGuides()
          .then((guideData) => {
              console.log('guideData',guideData);
              // $scope.allShrooms = Object.values(mushroomData.data)
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/GuideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("GuideFactory", function ($q, $http) {

      let getGuides = () => {
          return $q((resolve, reject) => {
              $http
                  .get("../guides.json")
                  .then((guides) => {
                      resolve(guides);
                  })
                  .catch((err) => {
                      reject(err);
                  });
          });
      };
      return { getGuides };
  });

}) (angular.module ('wideWorldTravel', ['ngRoute']));



//====================================================================================================================
// Module:    wideWorldTravel
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl: "partials/books.html",
                  controller: "GuideCtrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/GuideCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("GuideCtrl", function ($scope, GuideFactory) {
      GuideFactory.getGuides()
          .then((guideData) => {
              console.log('guideData',guideData);
              $scope.allGuides = Object.values(guideData.data);
              console.log('$scope.allGuides',$scope.allGuides);
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/GuideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("GuideFactory", function ($q, $http) {

      let getGuides = () => {
          return $q((resolve, reject) => {
              $http
                  .get("../guides.json")
                  .then((guides) => {
                      resolve(guides);
                  })
                  .catch((err) => {
                      reject(err);
                  });
          });
      };
      return { getGuides };
  });

}) (angular.module ('wideWorldTravel', ['ngRoute']));



//====================================================================================================================
// Module:    wideWorldTravel
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl: "partials/books.html",
                  controller: "GuideCtrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/GuideCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("GuideCtrl", function ($scope, GuideFactory) {
      GuideFactory.getGuides()
          .then((guideData) => {
              console.log('guideData',guideData);
              $scope.allGuides = Object.values(guideData.data[0]);
              console.log('$scope.allGuides',$scope.allGuides);
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/GuideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("GuideFactory", function ($q, $http) {

      let getGuides = () => {
          return $q((resolve, reject) => {
              $http
                  .get("../guides.json")
                  .then((guides) => {
                      resolve(guides);
                  })
                  .catch((err) => {
                      reject(err);
                  });
          });
      };
      return { getGuides };
  });

}) (angular.module ('wideWorldTravel', ['ngRoute']));



//====================================================================================================================
// Module:    wideWorldTravel
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl: "partials/books.html",
                  controller: "GuideCtrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/GuideCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("GuideCtrl", function ($scope, GuideFactory) {
      GuideFactory.getGuides()
          .then((guideData) => {
              console.log('guideData',guideData);
              $scope.allGuides = Object.values(guideData.data);
              console.log('$scope.allGuides',$scope.allGuides);
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/GuideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("GuideFactory", function ($q, $http) {

      let getGuides = () => {
          return $q((resolve, reject) => {
              $http
                  .get("../guides.json")
                  .then((guides) => {
                      resolve(guides);
                  })
                  .catch((err) => {
                      reject(err);
                  });
          });
      };
      return { getGuides };
  });

}) (angular.module ('wideWorldTravel', ['ngRoute']));



//====================================================================================================================
// Module:    wideWorldTravel
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl: "partials/books.html",
                  controller: "GuideCtrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/GuideCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("GuideCtrl", function ($scope, GuideFactory) {
      GuideFactory.getGuides()
          .then((guideData) => {
              console.log('guideData',guideData);
              $scope.allGuides = Object.values(guideData.data.data);
              console.log('$scope.allGuides',$scope.allGuides);
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/GuideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("GuideFactory", function ($q, $http) {

      let getGuides = () => {
          return $q((resolve, reject) => {
              $http
                  .get("../guides.json")
                  .then((guides) => {
                      resolve(guides);
                  })
                  .catch((err) => {
                      reject(err);
                  });
          });
      };
      return { getGuides };
  });

}) (angular.module ('wideWorldTravel', ['ngRoute']));



//====================================================================================================================
// Module:    wideWorldTravel
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl: "partials/books.html",
                  controller: "GuideCtrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/GuideCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("GuideCtrl", function ($scope, GuideFactory) {
      GuideFactory.getGuides()
          .then((guideData) => {
              console.log('guideData',guideData);
              $scope.allGuides = Object.values(guideData.data);
              console.log('$scope.allGuides',$scope.allGuides);
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/GuideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("GuideFactory", function ($q, $http) {

      let getGuides = () => {
          return $q((resolve, reject) => {
              $http
                  .get("../guides.json")
                  .then((guides) => {
                      resolve(guides);
                  })
                  .catch((err) => {
                      reject(err);
                  });
          });
      };
      return { getGuides };
  });

}) (angular.module ('wideWorldTravel', ['ngRoute']));



//====================================================================================================================
// Module:    wideWorldTravel
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl: "partials/books.html",
                  controller: "GuideCtrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/GuideCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("GuideCtrl", function ($scope, GuideFactory) {
      GuideFactory.getGuides()
          .then((guideData) => {
              console.log('guideData',guideData);
              $scope.allGuides = Object.values(guideData.data);
              console.log('$scope.allGuides',Object.values($scope.allGuides));
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/GuideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("GuideFactory", function ($q, $http) {

      let getGuides = () => {
          return $q((resolve, reject) => {
              $http
                  .get("../guides.json")
                  .then((guides) => {
                      resolve(guides);
                  })
                  .catch((err) => {
                      reject(err);
                  });
          });
      };
      return { getGuides };
  });

}) (angular.module ('wideWorldTravel', ['ngRoute']));



//====================================================================================================================
// Module:    wideWorldTravel
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl: "partials/books.html",
                  controller: "GuideCtrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/GuideCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("GuideCtrl", function ($scope, GuideFactory) {
      GuideFactory.getGuides()
          .then((guideData) => {
              console.log('guideData',guideData);
              $scope.allGuides = Object.values(guideData.data);
              console.log('$scope.allGuides',$scope.allGuides);
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/GuideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("GuideFactory", function ($q, $http) {

      let getGuides = () => {
          return $q((resolve, reject) => {
              $http
                  .get("../guides.json")
                  .then((guides) => {
                      resolve(guides);
                  })
                  .catch((err) => {
                      reject(err);
                  });
          });
      };
      return { getGuides };
  });

}) (angular.module ('wideWorldTravel', ['ngRoute']));



//====================================================================================================================
// Module:    wideWorldTravel
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl: "partials/books.html",
                  controller: "GuideCtrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/GuideCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("GuideCtrl", function ($scope, GuideFactory) {
      GuideFactory.getGuides()
          .then((guideData) => {
              console.log('guideData',guideData);
              $scope.allGuides = Object.values(guideData.data);
              console.log('$scope.allGuides',$scope.allGuides.values());
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/GuideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("GuideFactory", function ($q, $http) {

      let getGuides = () => {
          return $q((resolve, reject) => {
              $http
                  .get("../guides.json")
                  .then((guides) => {
                      resolve(guides);
                  })
                  .catch((err) => {
                      reject(err);
                  });
          });
      };
      return { getGuides };
  });

}) (angular.module ('wideWorldTravel', ['ngRoute']));



//====================================================================================================================
// Module:    wideWorldTravel
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl: "partials/books.html",
                  controller: "GuideCtrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/GuideCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("GuideCtrl", function ($scope, GuideFactory) {
      GuideFactory.getGuides()
          .then((guideData) => {
              console.log('guideData',guideData);
              $scope.allGuides = Object.values(guideData.data);
              console.log('$scope.allGuides',$scope.allGuides);
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/GuideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("GuideFactory", function ($q, $http) {

      let getGuides = () => {
          return $q((resolve, reject) => {
              $http
                  .get("../guides.json")
                  .then((guides) => {
                      resolve(guides);
                  })
                  .catch((err) => {
                      reject(err);
                  });
          });
      };
      return { getGuides };
  });

}) (angular.module ('wideWorldTravel', ['ngRoute']));



//====================================================================================================================
// Module:    wideWorldTravel
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl: "partials/books.html",
                  controller: "GuideCtrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/GuideCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("GuideCtrl", function ($scope, GuideFactory) {
      GuideFactory.getGuides()
          .then((guideData) => {
              console.log('guideData',guideData);
              $scope.allGuides = guideData.data;
              console.log('$scope.allGuides',$scope.allGuides);
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/GuideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("GuideFactory", function ($q, $http) {

      let getGuides = () => {
          return $q((resolve, reject) => {
              $http
                  .get("../guides.json")
                  .then((guides) => {
                      resolve(guides);
                  })
                  .catch((err) => {
                      reject(err);
                  });
          });
      };
      return { getGuides };
  });

}) (angular.module ('wideWorldTravel', ['ngRoute']));



//====================================================================================================================
// Module:    wideWorldTravel
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl: "partials/books.html",
                  controller: "GuideCtrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/GuideCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("GuideCtrl", function ($scope, GuideFactory) {
      GuideFactory.getGuides()
          .then((guideData) => {
              console.log('guideData',guideData);
              $scope.allGuides = guideData.data;
              console.log('$scope.allGuides',$scope.allGuides);
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/GuideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("GuideFactory", function ($q, $http) {

      let getGuides = () => {
          return $q((resolve, reject) => {
              $http
                  .get("../guides.json")
                  .then((guides) => {
                      resolve(guides);
                  })
                  .catch((err) => {
                      reject(err);
                  });
          });
      };
      return { getGuides };
  });

}) (angular.module ('wideWorldTravel', ['ngRoute']));



//====================================================================================================================
// Module:    wideWorldTravel
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl: "partials/books.html",
                  controller: "GuideCtrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/GuideCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("GuideCtrl", function ($scope, GuideFactory) {
      GuideFactory.getGuides()
          .then((guideData) => {
              $scope.allGuides = Object.values(guideData.data);
              $scope.allGuides.forEach(guide => {
                  console.log('guide',guide);
              }
              );
          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/GuideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("GuideFactory", function ($q, $http) {

      let getGuides = () => {
          return $q((resolve, reject) => {
              $http
                  .get("../guides.json")
                  .then((guides) => {
                      resolve(guides);
                  })
                  .catch((err) => {
                      reject(err);
                  });
          });
      };
      return { getGuides };
  });

}) (angular.module ('wideWorldTravel', ['ngRoute']));



//====================================================================================================================
// Module:    wideWorldTravel
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl: "partials/books.html",
                  controller: "GuideCtrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/GuideCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("GuideCtrl", function ($scope, GuideFactory) {
      GuideFactory.getGuides()
          .then((guideData) => {
              $scope.allGuides = guideData.data.guides;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/GuideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("GuideFactory", function ($q, $http) {

      let getGuides = () => {
          return $q((resolve, reject) => {
              $http
                  .get("../guides.json")
                  .then((guides) => {
                      resolve(guides);
                  })
                  .catch((err) => {
                      reject(err);
                  });
          });
      };
      return { getGuides };
  });

}) (angular.module ('wideWorldTravel', ['ngRoute']));



//====================================================================================================================
// Module:    wideWorldTravel
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  module
      .config($routeProvider => {
          $routeProvider
              .when("/", {
                  templateUrl: "partials/books.html",
                  controller: "GuideCtrl"
              })
              .otherwise("/");
      });

//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/GuideCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("GuideCtrl", function ($scope, GuideFactory) {
      GuideFactory.getGuides()
          .then((guideData) => {
              $scope.allGuides = guideData.data.guides;

          });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/GuideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.factory("GuideFactory", function ($q, $http) {

      let getGuides = () => {
          return $q((resolve, reject) => {
              $http
                  .get("../data/guides.json")
                  .then((guides) => {
                      resolve(guides);
                  })
                  .catch((err) => {
                      reject(err);
                  });
          });
      };
      return { getGuides };
  });

}) (angular.module ('wideWorldTravel', ['ngRoute']));


