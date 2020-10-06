var app = angular.module('myApp', []);
app.controller('drinkingController', function ($scope) {

    $scope.warningText = '';
    $scope.start = function () {

        chrome.storage.sync.get(['stay_hydrate_interval'], function (result) {
            if (result.stay_hydrate_interval) {
                chrome.browserAction.setBadgeText({ text: "On" });
                chrome.browserAction.setBadgeBackgroundColor({ color: "green" });
                chrome.alarms.create({ periodInMinutes: Number(result.stay_hydrate_interval) });

                window.close();
            } else {
                chrome.runtime.openOptionsPage();
            }
        });
    };

    $scope.cancel = function () {
        chrome.browserAction.setBadgeText({ text: '' });
        chrome.alarms.clearAll();
        window.close();
    };
});