'use strict';

angular.module("wideWorldTravel").controller("GuideCtrl", function ($scope, GuideFactory) {
    GuideFactory.getGuides()
        .then((guideData) => {
            console.log('guideData',guideData);
            $scope.allGuides = Object.values(guideData.data);
            console.log('$scope.allGuides',$scope.allGuides);
        });
});