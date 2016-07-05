var app = angular.module('taskbobApp',['ngRoute','toaster','ngCookies','ui.router','LocalStorageModule','satellizer','imageupload','ngAnimate', 'ui.bootstrap','angular-table','ngFacebook','directive.g+signin','jkuri.gallery']);


app.config(function (localStorageServiceProvider,$facebookProvider) {
  localStorageServiceProvider
    .setPrefix('app');
     $facebookProvider.setAppId('835092279928634');
});
