<?php
// ===== CORS CONFIG =====
$allowed_origins = [
    "http://localhost:8080",
    "http://localhost:5173",
    "https://cnaws.in"
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? "";
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Credentials: true");
} else {
    header("Access-Control-Allow-Origin: https://cnaws.in");
    header("Access-Control-Allow-Credentials: true");
}
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ===== STRICT JSON OUTPUT =====
header("Content-Type: application/json");

// ===== SESSION CONFIG =====
$is_local = strpos($origin, "localhost") !== false;
session_set_cookie_params([
    'lifetime' => 0,
    'path'     => '/',
    'domain'   => $is_local ? 'localhost' : '.cnaws.in',
    'secure'   => !$is_local,
    'httponly' => true,
    'samesite' => $is_local ? 'Lax' : 'None'
]);
session_start();

// ===== DEBUG: Output session and cookies for troubleshooting =====
header("Content-Type: application/json");
if (!isset($_SESSION['admin_authenticated']) || $_SESSION['admin_authenticated'] !== true) {
    echo json_encode([
        "success" => false,
        "message" => "Unauthorized",
        "session" => $_SESSION,
        "cookies" => $_COOKIE,
        "sid" => session_id()
    ]);
    exit;
}

// ===== DATABASE CONNECTION =====
require_once __DIR__ . "/config.php";

// ===== READ JSON INPUT =====
$data = json_decode(file_get_contents("php://input"), true);

$title = trim($data["title"] ?? "");
$lat = floatval($data["lat"] ?? 0);
$lng = floatval($data["lng"] ?? 0);
$description = trim($data["description"] ?? "");
$date = trim($data["date"] ?? "");

if (!$title || !$lat || !$lng) {
    echo json_encode([
        "success" => false,
        "message" => "Title, latitude, and longitude are required."
    ]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO conflicts (title, lat, lng, description, date) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sddss", $title, $lat, $lng, $description, $date);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Failed to add conflict."
    ]);
}

$stmt->close();
$conn->close();
?>
?>
