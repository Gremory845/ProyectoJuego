<?php
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userName = $_POST['user_name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    // Verificar si el usuario o email ya existen
    $existingUser = $database->get("users", "*", ["OR" => ["user_name" => $userName, "email" => $email]]);
    
    if ($existingUser) {
        echo "El nombre de usuario o correo electrónico ya están en uso. Intenta nuevamente";
    } else {
        $database->insert("users", [
            "user_name" => $userName,
            "email" => $email,
            "password" => $password
        ]);
        echo "Registro exitoso. <a href='login.php'>Inicia sesión aquí</a>";
        header("Location: login.php");
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registro de Usuario</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body class="body2">
    <div class="color">
      <h2>Registro de Usuario</h2>
        <form class="form2" action="" method="POST" id="registerForm">
            <label for="user_name">Nombre de Usuario:</label>
            <input type="text" id="user_name" name="user_name" required>
            
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>
            
            <button class= "log-button" type="submit">Registrarse</button>
        </form>
      <p>¿Ya tienes una cuenta? <a href="login.php">Inicia sesión aquí</a></p> 
    </div>
</body>
</html>
