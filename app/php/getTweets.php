<?php
	$mysqli = new mysqli("localhost", "root", "111", "Twitter");
	if ($mysqli->connect_errno) {
		echo "Failed to connect to MySQL: " . $mysqli->connect_errno;
	}

	$res = $mysqli->query("SELECT * FROM Post");
	$res->data_seek(0);
	$result = array();
	while ($row = $res->fetch_assoc()) {
		$result[] = array('username'=>$row['username'],
											'timestamp'=>$row['timestamp'],
											'content'=>$row['content'],
											'reply_num'=>$row['reply_num'],
											'retweet_num'=>$row['retweet_num'],
											'favorite_num'=>$row['favorite_num']);
	}

	echo json_encode($result);
?>