<?php
session_start();
require 'config.php';

/*ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);*/

date_default_timezone_set('America/Costa_Rica');

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false, 'message' => 'Usuario no autenticado.']);
    exit;
}

$user_id = $_SESSION['user_id'];
$date = date('Y-m-d H:i:s');

// Obtener el puntaje enviado desde JavaScript
$data = json_decode(file_get_contents("php://input"), true);
$database->update("sessions", [
    "device_type" => $data['browser'],
    "screen_size" => $data['screen'],
    "closed_browser" => $data['closed'],
    "date" => $date
], [
    "user_id" => $user_id
]);
$score = isset($data['score']) ? (int)$data['score'] : 0;

// Verificar si el puntaje es válido
if ($score <= 0) {
    echo json_encode(['success' => false, 'message' => 'Puntaje no válido.']);
    exit;
}

try {
    // Verificar si ya existe un registro en sessions del usuario
    $existingScore = $database->get("sessions", "score", [
        "user_id" => $user_id
    ]);

    if ($existingScore === null) {
        // No existe un registro previo inserta uno nuevo
        $database->insert("sessions", [
            "user_id" => $user_id,
            "score" => $score,
            "length" => $data['length'],
            "level" => $data['level'],
            "device_type" => $data['browser'],
            "screen_size" => $data['screen'],
            "closed_browser" => $data['closed'],
            "date" => $date
        ]);
        echo date('Y-m-d H:i:s');
        echo json_encode(['success' => true, 'message' => 'Puntaje guardado correctamente.']);
    } else {
        // Ya existe un puntaje, compara y actualiza solo si el nuevo puntaje es mayor
        if ($score > $existingScore) {
            $database->update("sessions", [
                "score" => $score,
                "length" => $data['length'],
                "level" => $data['level'],
                "device_type" => $data['browser'],
                "screen_size" => $data['screen'],
                "closed_browser" => $data['closed'],
                "date" => $date
            ], [
                "user_id" => $user_id
            ]);
            echo date('Y-m-d H:i:s');
            echo json_encode(['success' => true, 'message' => 'Puntaje actualizado correctamente.']);
        } else {
            echo json_encode(['success' => false, 'message' => 'El puntaje no supera el máximo registrado.']);
        }
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error al guardar el puntaje.', 'error' => $e->getMessage()]);
}
?>