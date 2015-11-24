<?php
	$mysqli = new mysqli("localhost", "root", "111", "Twitter");
	if ($mysqli->connect_errno) {
		echo "Failed to connect to MySQL: " . $mysqli->connect_errno;
	}

	$res = $mysqli->query("SELECT id, keyword FROM PostKeyword");
	$res->data_seek(0);
	$result = array();
	while ($row = $res->fetch_assoc()) {
		$result[$row['id']] = $row['keyword'];
	}

	echo json_encode($result);
?>