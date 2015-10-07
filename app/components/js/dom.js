$(document).ready(function() {

	

	$(".dropdown-menu a, .dropdown-menu label").click(function(event) {
		$(".dropdown-menu").addClass("hide");
	});

	$(".menu-btn a").click(function(event) {
		event.preventDefault();
		var menu = $("#main-submenu");
		if (menu.hasClass("hide")) {
			menu.removeClass("hide");
		} else {
			menu.addClass("hide");
		}
	});

	$("#submit-dropdown-btn").click(function(event) {
		event.preventDefault();
		var menu = $("#upload-submenu");
		if (menu.hasClass("hide")) {
			menu.removeClass("hide");
		} else {
			menu.addClass("hide");
		}
	});

	$("#notify-btn").click(function(event) {
		event.preventDefault();
		var menu = $("#notify-submenu");
		if (menu.hasClass("hide")) {
			menu.removeClass("hide");
		} else {
			menu.addClass("hide");
		}
	});

	$("#settings-btn").click(function(event) {
		event.preventDefault();
		var menu = $("#settings-submenu");
		if (menu.hasClass("hide")) {
			menu.removeClass("hide");
		} else {
			menu.addClass("hide");
		}
	});
});
