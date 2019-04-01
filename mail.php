<?php

echo json_encode($_POST);

    mail('thierry.sambussy@gmail.com',
        'nouveau message',
        $_POST['email'] . " " . $_POST['name'] .  " " . $_POST['message']);

?>