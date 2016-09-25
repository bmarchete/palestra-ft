/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('clientApp.controllers',[]).controller('ClientListController',
function($scope,$state,popupService,$window,Client){

    $scope.clients=Client.query();



}).controller('ClientViewController',function($scope,$stateParams,Client){

    $scope.client=Client.get({id:$stateParams.id});

});
