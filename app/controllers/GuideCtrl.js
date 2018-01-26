'use strict';

angular.module("wideWorldTravel").controller("GuideCtrl", function ($scope, GuideFactory) {
    GuideFactory.getGuides()
        .then((guideData) => {
            $scope.allGuides = guideData.data.guides;

        });
});