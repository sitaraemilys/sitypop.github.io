<?php

require_once("./include/fgcontactform.php");


$recipient = "sityemilyshah@gmail.com";
$successPage = "index.html/";

//import form information
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


$name=stripslashes($name);
$email=stripslashes($email);
$subject=stripslashes($subject);
$message=stripslashes($message);
$message= "Name: $name, \n\n Message: $message";

/*
Simple form validation
check to see if an email and message were entered
*/

//if no message entered and no email entered print an error
if (empty($message) && empty($email)){
print "No email address and no message was entered. <br>Please include an email and a message";
}
//if no message entered send print an error
elseif (empty($message)){
print "No message was entered.<br>Please include a message.<br>";
}
//if no email entered send print an error
elseif (empty($email)){
print "No email address was entered.<br>Please include your email. <br>";
}
//if the form has both an email and a message
else {

//mail the form contents
mail( "$recipient", "$subject", "$message", "From: $email" );
header("Location: $successPage");
}

?>
