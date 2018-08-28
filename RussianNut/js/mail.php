<?php
    $to = "dagos999@mail.ru";
    $mysite = "Amimocs";
     
     $name = trim($_POST["name"]);
     $phone = trim($_POST["phone"]);
     $email = trim($_POST["email"]);
     $message = "Имя: $name\n Телефон: $phone\nТелефон: $email\n";
     mail($to, $mysite, $message)
?>