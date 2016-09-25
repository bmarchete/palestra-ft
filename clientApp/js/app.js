/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('clientApp',['ui.router','ngResource','clientApp.controllers','clientApp.services']);

angular.module('clientApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('clients',{
        url:'/clients',
        templateUrl:'partials/clients.html',
        controller:'ClientListController'
    }).state('viewClient',{
       url:'/clients/:id',
       templateUrl:'partials/client-view.html',
       controller:'ClientViewController'
    });
}).run(function($state){
   $state.go('clients');
});
