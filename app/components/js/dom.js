$(document).ready(function() {

	$(".dropdown-menu a, .dropdown-menu label").click(function(event) {
		$(".dropdown-menu").fadeOut(100);
	});

	$(".menu-btn a").click(function(event) {
		event.preventDefault();
		var menu = $("#main-submenu");
		if (menu.is(":visible")) {
			menu.fadeOut(50);
		} else {
			menu.fadeIn(50);
		}
	});

	$("#submit-dropdown-btn").click(function(event) {
		event.preventDefault();
		var menu = $("#upload-submenu");
		if (menu.is(":visible")) {
			menu.fadeOut(50);
		} else {
			menu.fadeIn(50);
		}
	});

	$("#notify-btn").click(function(event) {
		event.preventDefault();
		var menu = $("#notify-submenu");
		if (menu.is(":visible")) {
			menu.fadeOut(50);
		} else {
			menu.fadeIn(50);
		}
	});

	$("#settings-btn").click(function(event) {
		event.preventDefault();
		var menu = $("#settings-submenu");
		if (menu.is(":visible")) {
			menu.fadeOut(50);
		} else {
			menu.fadeIn(50);
		}
	});

	$("#result-label").click(function(event) {
		event.preventDefault();
		$("#download-label").removeClass("active");
		$("#result-label").addClass("active");
		$(".process-results").fadeIn("fast");
		$(".download-options-container").hide();
	});

	$("#download-label").click(function(event) {
		event.preventDefault();
		$("#download-label").addClass("active");
		$("#result-label").removeClass("active");
		$(".process-results").hide();
		$(".download-options-container").fadeIn("fast");
	});

});
