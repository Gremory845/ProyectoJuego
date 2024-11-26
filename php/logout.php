<?php
session_start();

// Verificar si se recibió el formulario de logout
if (isset($_POST['logout']) && $_POST['logout'] === 'true') {

    session_unset();
    session_destroy();

    header("Location: ../index.html");
    exit;
}
?>

