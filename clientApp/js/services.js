/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('clientApp.services',[]).factory('Client',function($resource){
    return $resource('http://localhost:8000/api/clients/:id',{id:'@id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
