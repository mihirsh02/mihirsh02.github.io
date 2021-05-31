<?php
    $name = $_POST['email'];

    $email_from = 'mihir.sharma2001@gmail.com';

    $email_subject = "New Form";

    $email_body = "Message: $name.\n".
                    "$visitor_email.\n";

    $to = "mihir.sharma2002@outlook.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");

?>

