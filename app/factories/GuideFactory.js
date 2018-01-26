'use strict';

angular.module("wideWorldTravel").factory("GuideFactory", function ($q, $http) {

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