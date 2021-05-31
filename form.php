<?php
    $name = $_POST['email'];

    $email_from = 'mihir.sharma2002@outlook.com';

    $email_subject = "New Form";

    $email_body = "Message: $name.\n";

    $to = "mihir.sharma2001@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");

?>

