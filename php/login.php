<?php
session_start();
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userName = $_POST['user_name'];
    $password = $_POST['password'];

    $user = $database->get("users", "*", ["user_name" => $userName]);
    
    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['user_id'];
        $_SESSION['user_name'] = $user['user_name'];
        echo "Inicio de sesión exitoso. Bienvenido, " . htmlspecialchars($user['user_name']) . "!";
        header("Location: ../game.html");
    } else {
        echo "Usuario o contraseña incorrectos. Intenta nuevamente";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Iniciar Sesión</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body class="body2">  
    <div class="color">
     <h2>Iniciar Sesión</h2>   
      <form class="form2" action="" method="POST">
        <label for="user_name">Nombre de Usuario:</label>
        <input type="text" id="user_name" name="user_name" required>
        
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required>
        
        <button class= "log-button" type="submit">Iniciar Sesión</button>
    </form>
    <p>¿No tienes una cuenta? <a href="register.php">Regístrate aquí</a></p>  
    </div>
    
</body>
</html>
