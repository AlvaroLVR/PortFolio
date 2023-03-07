<?php
    $destinatario = 'alvaroleandro74@gmail.com';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $messagecomplete = $message . "n\atentamente: " . $name;
    $header = 'correo enviado desde portfolio de Alvaro Valencia Rojas';

    mail($destinatario,$subject,$message,$header);
    echo "<script> alert('el codigo php está funcando)</script>";
    echo "<script> setTimeout(\"location.href='AboutMeContainer.js'\",1000)</script>";
?>