const app = angular.module('portfolioApp', []);

app.controller('MainController', function ($scope, $http) {
  $scope.lang = localStorage.getItem("lang") || "pl";
  $scope.showCookies = localStorage.getItem("cookiesAccepted") !== "yes";

  $scope.loadTranslations = function (lang) {
    $http.get(`i18n/${lang}.json`).then((res) => {
      $scope.t = res.data;
    });
  };

  $scope.changeLang = function (lang) {
    localStorage.setItem("lang", lang);
    $scope.loadTranslations(lang);
  };

  $scope.acceptCookies = function () {
    localStorage.setItem("cookiesAccepted", "yes");
    $scope.showCookies = false;
  };

  $scope.loadTranslations($scope.lang);
});