<?php

session_start();

function get_hashed_password ($password) {
	$rand = substr(
					strtr(
						base64_encode(
							openssl_random_pseudo_bytes(16)
						)
					, '+', '.')
				, 0, 22);
		$salt = '$2a$12$' . $rand;
		return crypt($password, $salt);
}

function user_create ($db, $username, $password) {
	$sql = $db->prepare('
		INSERT INTO users (username, password)
		VALUES (:username, :password)
	');
	$sql->bindvalue(':username', $username, PDO::PARAM_STR);
	$sql->bindvalue(':password', get_hashed_password($password), PDO::PARAM_STR);
	$sql->execute();

	return $db->lastInsertId();
}

function user_is_signed_in () {
	if (!isset($_SESSION['user-id'])
		|| empty($_SESSION['user-id'])
		|| !isset($_SESSION['fingerprint'])
		|| $_SESSION['fingerprint'] != get_fingerprint($_SESSION['user-id'])
	) {
		return false;
	}

	return true;
}

function user_get ($db, $username, $password) {
	$sql = $db->prepare ('
		SELECT id, username, password
		FROM users
		WHERE username = :username
		LIMIT 1
	');
	$sql->bindvalue(':username', $username, PDO::PARAM_STR);
	$sql->execute();
	$user = $sql->fetch();

	if (empty($user) || !password_match($password, $user['password'])) {
		return false;
	}

	return $user['id'];
}

function password_match ($pass_clear_text, $pass_hashed) {
	return crypt($pass_clear_text, $pass_hashed) == $pass_hashed;
}

function user_sign_in ($user_id) {
	session_regenerate_id();
	$_SESSION['user-id'] = $user_id;
	$_SESSION['fingerprint'] = get_fingerprint($user_id);
}

function get_fingerprint ($user_id) {
	return sha1($user_id 
	. $_SERVER['REMOTE_ADDR']         // IP Address
	. session_id()
	. $_SERVER['HTTP_USER_AGENT']     // Their browser
	);
}

function user_sign_out () {
	$_SESSION = array();
	session_destroy();
}