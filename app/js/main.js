var neuApp=angular.module("neuApp",["ngFileUpload"]);neuApp.controller("MainCtrl",["$scope","Upload",function(a,b){a.upload=function(a){b.upload({url:"php/fileupload",method:"POST",data:{file:a,ip:"userip"}}).then(function(a){console.log("repsonse is here")})}}]),$(document).ready(function(){$(".dropdown-menu a, .dropdown-menu label").click(function(a){$(".dropdown-menu").fadeOut(100)}),$(".menu-btn a").click(function(a){a.preventDefault();var b=$("#main-submenu");b.is(":visible")?b.fadeOut(50):b.fadeIn(50)}),$("#submit-dropdown-btn").click(function(a){a.preventDefault();var b=$("#upload-submenu");b.is(":visible")?b.fadeOut(50):b.fadeIn(50)}),$("#notify-btn").click(function(a){a.preventDefault();var b=$("#notify-submenu");b.is(":visible")?b.fadeOut(50):b.fadeIn(50)}),$("#settings-btn").click(function(a){a.preventDefault();var b=$("#settings-submenu");b.is(":visible")?b.fadeOut(50):b.fadeIn(50)}),$("#result-label").click(function(a){a.preventDefault(),$("#download-label").removeClass("active"),$("#result-label").addClass("active"),$(".process-results").fadeIn("fast"),$(".download-options-container").hide()}),$("#download-label").click(function(a){a.preventDefault(),$("#download-label").addClass("active"),$("#result-label").removeClass("active"),$(".process-results").hide(),$(".download-options-container").fadeIn("fast")})});