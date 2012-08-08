<?php

/**
 * Small description of this file:
 * Links name and title to the database
 *
 * @author Bashir Suleiman <bashir.b.suleiman@gmail.com>
 * @copyright 2012 Bashir Suleiman
 * @license BSD-3-Clause https://github.com/sule0010/web-app/NEW-BSD-LICENSE.txt>
 * @Labrinthos <https://github.com/sule0010/web-app>
 * @version 1.0.0
 * @package Labrinthos
 */

require_once 'includes/db.php';	

$sql = $db->query('
	SELECT id, name, time
	FROM game
	ORDER BY time ASC
	LIMIT 10
');

// Display the last error created by our database
//var_dump($db->errorInfo());

$results = $sql->fetchAll();

?>
<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8">
		<title>Laburinthos</title>
		<link href="css/general.css" rel="stylesheet">
		<link href='http://fonts.googleapis.com/css?family=Press+Start+2P' rel='stylesheet' type='text/css'>
	</head>
	
	<body>
		<div id="wrapper">
			<h1>Laburinthos</h1>
			<iframe src="Laburinthos/index.html" width="850" height="700"></iframe>
		</div>
		<div id="score">
			<fieldset id="record"><legend>LeaderBoard</legend>
						<dl>
							<dt id="name">Name</dt>
							<dt id="time">Time</dt>
							<?php foreach ($results as $game) : ?>
								<dd id="data-1"><?php echo $game['name']; ?></dd>
								<dd id="data-2"><?php echo $game['time']; ?></dd>
							<?php endforeach; ?>
						</dl>
					</fieldset>
		</div>
	</body>
</html>