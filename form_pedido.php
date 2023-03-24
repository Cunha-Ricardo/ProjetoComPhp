<?php

    if(isset($_POST['submit1']))
        include_once('config.php');

        $nome= $_POST['nome'];
        $email= $_POST['email'];
        $telefone= $_POST['telefone'];
        $cep= $_POST['cep'];
        $rua= $_POST['rua'];
        $bairro= $_POST['bairro'];
        $cidade= $_POST['cidade'];
        $estado= $_POST['uf'];
        $mensagem= $_POST['mensagem'];

        $result= mysqli_query($conexao,"INSERT INTO pedido(nome,email,telefone,cep,rua,bairro,cidade,estado,mensagem)
        VALUES ('$nome','$email','$telefone','$cep','$rua','$bairro','$cidade','$estado','$mensagem')");
        header('Location: index.html');


?>