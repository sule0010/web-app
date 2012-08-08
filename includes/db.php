<?php

// opens a connection to the MySQL database
// Shared between all the PHP files in our application

// Our username and password are kept in Environment variables, in .htaccess
// This is for security, so they are never publicly visible in Github
$user = getenv('MYSQL_USERNAME');       // the MySQL username
$pass = getenv('MYSQL_PASSWORD');           // The MySQL password
$host = getenv('MYSQL_DB_HOST');
$dbname = getenv('MYSQL_DB_NAME');

$data_source = getenv('mysql:host=%s;dbname=%s' $host, $dbname);

// PDO: PHP Data Objects
// Allows us to connect to many different kinds of databases
$db = new PDO($data_source, $user, $pass);

// Forse the connection to communicate in utf8
// and support many human languages (even klingon)
$db->exec('SET NAMES utf8');

