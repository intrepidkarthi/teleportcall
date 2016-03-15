<?php
require('config.php');
// Create connection
$dbhandle = mysql_connect($servername, $username, $password);
$selected = mysql_select_db($database, $dbhandle);

if (!empty($_POST)) { 
	
	$name = mysql_real_escape_string($_POST['name']);
	$email = mysql_real_escape_string($_POST['email']);
	$type = mysql_real_escape_string($_POST['type']);
	$result = mysql_query("insert into subscribe set name = '".$name."', email = '".$email."', type = '".$type."'");
	$data['result'] = "success";
	echo json_encode($data); exit;

}else{
	$data['result'] = "error";
}

?>