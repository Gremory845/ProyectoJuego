<?php 
    namespace Medoo;
    require 'Medoo.php';
        $database = new Medoo([
            'type'=>'mysql',
            'host' => 'localhost',
            'database' => 'proyecto_juego',
            'username' => 'root',
            'password' => ''
        ]);
?>