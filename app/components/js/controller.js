var neuApp = angular.module('neuApp', ['ngFileUpload']);

neuApp.controller('MainCtrl',
		['$scope', 'Upload', '$timeout',function($scope, Upload, $timeout) {

	$scope.upload = function(sentence) {
		alert(sentence);
		$(".loading-effect-container").fadeIn(500);
		Upload.upload({
			url: 'php/sentenceupload',
			method: 'POST',
			data: { setence: sentence, ip: 'userip' }
		}).then(function(resp) {
			$(".loading-effect-container").fadeOut(500);

		});
	};

	$scope.uploadFile = function(file) {
		$(".loading-effect-container").fadeIn(500);
		$("#upload-submenu").fadeOut(100);
		Upload.upload({
			url: 'php/fileupload',
			method: 'POST',
			data: { file: file, ip: 'userip'}
		}).then(function(resp) {
			console.log("repsonse is here");
			$(".loading-effect-container").fadeOut(500);
		});
	};

	$scope.uploadFiles = function(files) {
		$(".loading-effect-container").fadeIn(500);
		$("#upload-submenu").fadeOut(100);
		$scope.files = files;
		if (files && files.length) {
			Upload.upload({
				url: 'php/multi_file_upload',
				data: {
					files: files
				}
			}).then(function(response) {
				$(".loading-effect-container").fadeOut(500);
			});
		}
	};

}]);