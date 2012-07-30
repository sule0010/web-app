<?php

require_once 'includes/db.php';	

$sql = $db->query('
	SELECT id, name, time
	FROM games
	ORDER BY time ASC
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
	</head>
	
	<body>
		<div id="wrapper">
			<h1>Laburinthos</h1>
			<iframe src="Laburinthos/index.html" width="850" height="700"></iframe>
		</div>
		<div id="score">
			<fieldset id="record"><legend>Total Records</legend>
						<dl>
							<dt id="time">Time</dt>
							<dt id="name">Name</dt>
							<?php foreach ($results as $game) : ?>
								<dd id="data-1"><?php echo $game['name']; ?></dd>
								<dd id="data-2"><?php echo $game['time']; ?></dd>
							<?php endforeach; ?>
						</dl>
					</fieldset>
		</div>
	</body>
</html>