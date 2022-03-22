<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to      = 'logigoat@gmail.com';
$subject = $name;
$message =$email . "\r\n" . $message;
$headers = 'From: info@logigoat.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$success=mail($to, $subject, $message, $headers);
$origin=$_POST['origin'];
if($origin=="contact"){
    $action="contact.html";
}
else{
    $action = $origin . ".html";
}
?>

<body onload="document.forms['success'].submit()">
    
<?php
echo "<form action=".$action." method='post' name='success'>";

if ($success){
    echo "<input type='hidden' name='message-sent' value='1'>";
}
else{
     echo "<input type='hidden' name='message-sent' value='0'>";
}

echo "</form>";
?> 
</body>
