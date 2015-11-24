var neuApp = angular.module('neuApp', ['ngFileUpload']);

neuApp.controller('MainCtrl',
		['$scope', 'Upload', '$timeout',function($scope, Upload, $timeout) {
	var data = {"sentences":[
			{
				"status":false,
			  "words":[
			 		{"word":"This","tag":"noun"},
			 		{"word":"is","tag":"verb"},
			 		{"word":"good","tag":"Adj"}
			 	]
			},
			{
				"status":true,
			  "words":[
			 		{"word":"Another","tag":"noun"},
			 		{"word":"sentence","tag":"verb"},
			 		{"word":"here","tag":"Adj"}
			 	]
			},
			{
				"status":true,
			  "words":[
			 		{"word":"Another","tag":"noun"},
			 		{"word":"sentence","tag":"verb"},
			 		{"word":"here","tag":"Adj"}
			 	]
			},
			{
				"status":true,
			  "words":[
			 		{"word":"Another","tag":"noun"},
			 		{"word":"sentence","tag":"verb"},
			 		{"word":"here","tag":"Adj"}
			 	]
			},
			{
				"status":true,
			  "words":[
			 		{"word":"Another","tag":"noun"},
			 		{"word":"sentence","tag":"verb"},
			 		{"word":"here","tag":"Adj"}
			 	]
			},
			{
				"status":false,
			  "words":[
			 		{"word":"Another","tag":"noun"},
			 		{"word":"sentence","tag":"verb"},
			 		{"word":"here","tag":"Adj"}
			 	]
			},
			{
				"status":true,
			  "words":[
			 		{"word":"Another","tag":"noun"},
			 		{"word":"sentence","tag":"verb"},
			 		{"word":"here","tag":"Adj"}
			 	]
			},
			{
				"status":false,
			  "words":[
			 		{"word":"Another","tag":"noun"},
			 		{"word":"sentence","tag":"verb"},
			 		{"word":"here","tag":"Adj"}
			 	]
			},
			{
				"status":false,
			  "words":[
			 		{"word":"Another","tag":"noun"},
			 		{"word":"sentence","tag":"verb"},
			 		{"word":"here","tag":"Adj"}
			 	]
			},
			{
				"status":true,
			  "words":[
			 		{"word":"Another","tag":"noun"},
			 		{"word":"sentence","tag":"verb"},
			 		{"word":"here","tag":"Adj"}
			 	]
			},
			{
				"status":true,
			  "words":[
			 		{"word":"Another","tag":"noun"},
			 		{"word":"sentence","tag":"verb"},
			 		{"word":"here","tag":"Adj"}
			 	]
			}
		]
	};
	$scope.sentences = data.sentences;

	$scope.upload = function(sentence) {
		$(".loading-effect-container").fadeIn(500);
		Upload.upload({
			url: 'php/sentenceupload',
			method: 'POST',
			data: { setence: sentence, ip: 'userip' }
		}).then(function(resp) {
			$(".loading-effect-container").fadeOut(500);

		});
	};

	$scope.uploadFile = function(file, errFiles) {
		$(".loading-effect-container").fadeIn(500);
		$("#upload-submenu").fadeOut(100);
		$(".process-results-container").fadeOut(200);

		$scope.file = file;
		if (file) {
			file.upload = Upload.upload({
				url: 'file_upload',
				method: 'GET',
				data: { file: file }
			}).then(function (resp) {
				// var data = resp.data;
				// $scope.sentences = data.sentences;
			});
			$scope.$apply();
			$(".loading-effect-container").fadeOut(500);
			$(".process-results-container").fadeIn(200);
			$("#nav-btn-container").fadeIn(600);
			scrollToResult();
		}
	};

	$scope.uploadFiles = function(files) {
		$(".loading-effect-container").fadeIn(500);
		$("#upload-submenu").fadeOut(100);
		$scope.files = files;
		if (files && files.length) {
			Upload.upload({
				url: 'multi_file_upload',
				data: {
					files: files
				}
			}).then(function(response) {
				$(".loading-effect-container").fadeOut(500);
			});
		}
	};

	function scrollToResult() {
		var backtop = $(window).scrollTop();
		var pageLookHeight = document.documentElement.clientHeight;
		$(window).scrollTop(backtop + pageLookHeight / 2 + 50);
	};

}]);