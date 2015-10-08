var neuApp = angular.module('neuApp', ['ngFileUpload']);

neuApp.controller('MainCtrl',
		['$scope', 'Upload', function($scope, Upload) {

	$scope.upload = function(file) {
		Upload.upload({
			url: 'php/fileupload',
			method: 'POST',
			data: { file: file, ip: 'userip'}
		}).then(function(resp) {
			console.log("repsonse is here");
		});
	}

}]);