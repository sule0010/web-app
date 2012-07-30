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
							<?php foreach ($results as $movie) : ?>
								<dd id="data-1"><?php echo $movie['id']; ?></dd>
								<dd id="data-2"><?php echo $movie['movie_title']; ?></dd>
							<?php endforeach; ?>
						</dl>
					</fieldset>
		</div>
	</body>
</html>