<?php
require_once '../classes/DbConnector.php';
use classes\DbConnector;

header('Content-Type: application/json');

$method = $_SERVER["REQUEST_METHOD"];

if ($method === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['UserName']) && !isset($data['password'])) {
        echo json_encode(array("messageuser" => " username.",
        "messagepass" => "Missing password."
    ));
        exit();
    } elseif (!isset($data['UserName'])) {
        echo json_encode(array("message" => "Missing username."));
        exit();
    } elseif (!isset($data['password'])) {
        echo json_encode(array("message" => "Missing password."));
        exit();
    }
    

    $UserName = $data['UserName'];
    $password = $data['password'];

    $dbcon = new DbConnector;
    $conn = $dbcon->getConnection();

    $sql = "SELECT UserName, userRole,	donorId FROM user WHERE UserName=? && password=?";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(1, $UserName);
    $stmt->bindParam(2, $password);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode(array("message" => $user["UserName"]));
    } else {
        echo json_encode(array("message" => "Invalid username or password."));
    }
} else {
    echo json_encode(array("message" => "Invalid request method."));
}
?>
