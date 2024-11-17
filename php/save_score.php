<?php
session_start();
require 'config.php';
// Asegúrate de que el usuario esté autenticado y tenga un `user_id` en la sesión
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false, 'message' => 'Usuario no autenticado.']);
    exit;
}
$user_id = $_SESSION['user_id'];
// Obtener el puntaje enviado desde JavaScript (desde `game.js`)
$data = json_decode(file_get_contents("php://input"), true);
$score = isset($data['score']) ? (int)$data['score'] : 0;
if ($score <= 0) {
    echo json_encode(['success' => false, 'message' => 'Puntaje no válido.']);
    exit;
}
try {
    $database->insert("sessions", [
        "score" => $score,
        "user_id" => $user_id
    ]);
    echo json_encode(['success' => true, 'message' => 'Puntaje guardado correctamente.']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error al guardar el puntaje.']);
}
?>