<?php

    if(isset($_POST['submit2']))
        include_once('config.php');

        $email= $_POST['email'];

        $result= mysqli_query($conexao,"INSERT INTO cadastroemail(email)
        VALUES ('$email')");
        header('Location: index.html');

?>