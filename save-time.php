<?php

/**
 * Small description of this file:
 * This sets a limit to how many names and time can be displayed in the score board.
 *
 * @author Bashir Suleiman <bashir.b.suleiman@gmail.com>
 * @copyright 2012 Bashir Suleiman
 * @license BSD-3-Clause https://github.com/sule0010/web-app/NEW-BSD-LICENSE.txt>
 * @Labrinthos <https://github.com/sule0010/web-app>
 * @version 1.0.0
 * @package Labrinthos
 */

$time = filter_input(INPUT_POST, 'time', FILTER_SANITIZE_STRING);
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);


//var_dump($_POST);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	if (strlen($time) < 1 || strlen($time) > 10) {
		$errors['time'] = true;
	}

	if (strlen($name) < 1 || strlen($name) > 256) {
		$errors['name'] = true;
	}

	if (empty($errors)) {
		// Do DB stuff
		require_once 'includes/db.php';

		$sql = $db->prepare('
		INSERT INTO game (time, name)
		VALUES (:time, :name)
		');
		$sql->bindValue(':time', $time, PDO::PARAM_STR);
		$sql->bindValue(':name', $name, PDO::PARAM_STR);
		$sql->execute();


		var_dump($db->errorInfo());

	}
}

?>