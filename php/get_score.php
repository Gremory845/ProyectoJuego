<?php
require 'config.php';

try {
    $query = $database->query("
        SELECT users.user_name, sessions.score 
        FROM sessions 
        INNER JOIN users ON sessions.user_id = users.user_id 
        ORDER BY sessions.score DESC 
        LIMIT 10
    ")->fetchAll();

    echo json_encode(['success' => true, 'data' => $query]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error al obtener los puntajes.']);
}
