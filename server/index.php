<?php
// require_once 'middleware.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Origin: *'); // Replace with your frontend URL
header('Access-Control-Allow-Methods: GET, OPTIONS'); // Allow GET and OPTIONS methods
header('Access-Control-Allow-Headers: Authorization, Content-Type');
    
// Your JWT secret key
$jwtSecretKey = 'spacex-123467890';

// api.php
require 'vendor/autoload.php'; // Include the JWT library

// $jwtSecretKey = 'your_jwt_secret_key'; // Replace with your actual secret key

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json');
    
    $headers = getallheaders();
    $token = $headers['Authorization'];
    $token = str_replace('Bearer ', '', $token);
    
    try {
    //   $decodedToken = JWT::decode($token, $jwtSecretKey, array('HS256'), true);


$decoded = JWT::decode($token, new Key($jwtSecretKey, 'HS256'));

$decoded = JWT::decode($token,  new Key($jwtSecretKey, 'HS256'), );

        
        // Token is verified
        echo json_encode(array("isVerified" => true));
    } catch (Exception $e) {
        http_response_code(401);
        echo json_encode(array("isVerified" => false));
    }
}

?>
