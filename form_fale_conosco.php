<?php

    if(isset($_POST['submit']))
        include_once('config.php');

        $nome= $_POST['nome'];
        $email= $_POST['email'];
        $telefone= $_POST['telefone'];
        $motivo= $_POST['motivo'];
        $mensagem= $_POST['mensagem'];

        $result= mysqli_query($conexao,"INSERT INTO faleconosco(nome,email,telefone,motivo,mensagem)
        VALUES ('$nome','$email','$telefone','$motivo','$mensagem')");
        header('Location: index.html');


?>