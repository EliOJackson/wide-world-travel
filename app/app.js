'use strict';

angular.module("wideWorldTravel", ["ngRoute"])
    .config($routeProvider => {
        $routeProvider
            .when("/", {
                templateUrl: "partials/books.html",
                controller: "GuideCtrl"
            })
            .otherwise("/");
    });
