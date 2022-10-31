<?php

$recepient = "Your_email@ya.ua"; /*The email for incoming messages */
$sitename = "Sample (Website Name)"; /*Put your Website Name this*/

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Name: $name \nEmail: $email \nMessage: $text";

$pagetitle = "New message \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");