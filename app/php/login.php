<?php
	$email = $_POST['email'];
	$password = $_POST['password'];

	$email = filter_var($email, FILTER_SANITIZE_EMAIL);
	$password = filter_var($password, FILTER_SANITIZE_STRING);

	$mysqli = new mysqli("localhost", "root", "111", "Twitter");

	$res = $mysqli->query("SELECT * FROM Users WHERE email='" . $email . "'  And password='" . $password ."'");
	$row = $res->fetch_assoc();

	if ($row) {
		header("Location: /user_panel.html");
		exit;
	} else {
		echo "<h1>User not exist.</h1>";
	}
?>